#!/usr/bin/env python3
"""
Script to compress PNG images in public/images folder to reduce file size
while maintaining quality at 90% and preserving alpha channel.
"""

import os
from PIL import Image
from pathlib import Path

def compress_png(image_path, target_quality=0.9):
    """
    Compress a PNG image aggressively to achieve at least 80% size reduction
    while preserving alpha channel
    
    Args:
        image_path: Path to the PNG image
        target_quality: Target quality (0-1), default 0.9 (90%)
    """
    try:
        # Open the image
        img = Image.open(image_path)
        
        # Get original file size
        original_size = os.path.getsize(image_path)
        
        # Check if image has alpha channel
        has_alpha = img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info)
        
        # Resize image to target quality (reduce dimensions)
        new_width = int(img.width * target_quality)
        new_height = int(img.height * target_quality)
        
        # Use high-quality resampling to maintain visual quality
        img_resized = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
        
        # Optimize based on whether alpha channel exists
        if has_alpha:
            # Keep RGBA for images with transparency
            if img_resized.mode != 'RGBA':
                img_resized = img_resized.convert('RGBA')
            
            # Save with maximum compression
            img_resized.save(
                image_path,
                format='PNG',
                optimize=True,
                compress_level=9
            )
        else:
            # Convert to RGB if no alpha channel needed
            if img_resized.mode == 'RGBA':
                # Create a white background
                background = Image.new('RGB', img_resized.size, (255, 255, 255))
                background.paste(img_resized, mask=img_resized.split()[3] if img_resized.mode == 'RGBA' else None)
                img_resized = background
            elif img_resized.mode != 'RGB':
                img_resized = img_resized.convert('RGB')
            
            # Save with maximum compression
            img_resized.save(
                image_path,
                format='PNG',
                optimize=True,
                compress_level=9
            )
        
        # Get new file size
        new_size = os.path.getsize(image_path)
        reduction = ((original_size - new_size) / original_size) * 100
        
        status = "✓" if reduction >= 80 else "⚠"
        print(f"{status} {os.path.basename(image_path)}: {original_size:,} -> {new_size:,} bytes ({reduction:.1f}% reduction)")
        
    except Exception as e:
        print(f"✗ Error processing {os.path.basename(image_path)}: {str(e)}")

def main():
    # Define the images folder
    images_folder = Path("public/images")
    
    if not images_folder.exists():
        print(f"Error: Folder '{images_folder}' does not exist!")
        return
    
    # Get all PNG files in the folder
    png_files = list(images_folder.glob("*.png"))
    
    if not png_files:
        print(f"No PNG files found in '{images_folder}'")
        return
    
    print(f"Found {len(png_files)} PNG files to compress...")
    print("Target: 90% quality (reduce dimensions), achieve 80%+ size reduction")
    print("-" * 60)
    
    # Process each PNG file
    for png_file in png_files:
        compress_png(png_file, target_quality=0.9)
    
    print("-" * 60)
    print(f"✓ Compression complete! Processed {len(png_files)} images.")
    print("Note: Images have been resized to 90% of original dimensions for size reduction.")

if __name__ == "__main__":
    main()

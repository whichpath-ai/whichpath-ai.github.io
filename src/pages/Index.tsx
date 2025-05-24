
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUp } from 'lucide-react';

const Index = () => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.includes('vi')) {
      setLanguage('vi');
    }
  }, []);

  const content = {
    en: {
      hero: {
        title: "Discover Your Perfect Career Path",
        subtitle: "AI-powered career guidance to help students find their ideal major and future",
        cta: "Get Started"
      },
      features: {
        title: "How WhichPath Works",
        test: {
          title: "Personality & Skills Assessment",
          desc: "Take comprehensive tests to understand your characteristics, interests, and aptitudes"
        },
        advice: {
          title: "AI Career Recommendations",
          desc: "Get personalized major and career suggestions based on your unique profile"
        },
        university: {
          title: "University Matching",
          desc: "Find the perfect universities and programs that align with your career goals"
        },
        chat: {
          title: "AI Career Advisor",
          desc: "Ask questions about majors, jobs, and universities - get instant expert guidance"
        }
      },
      partnership: {
        title: "Partner With Us",
        subtitle: "Transform Career Guidance at Your Institution",
        desc: "Join leading schools and teaching centers using WhichPath to provide world-class career guidance to their students.",
        benefits: [
          "Comprehensive AI-powered career assessments",
          "Personalized guidance for every student",
          "Real-time university and program matching",
          "Detailed analytics and reporting",
          "Seamless integration with your systems"
        ],
        cta: "Contact for Partnership"
      },
      footer: {
        contact: "Contact Us",
        email: "official@whichpath.ai",
        cooperation: "For cooperation and advertising opportunities"
      }
    },
    vi: {
      hero: {
        title: "Khám Phá Con Đường Sự Nghiệp Hoàn Hảo",
        subtitle: "Hướng dẫn nghề nghiệp bằng AI giúp học sinh tìm ra ngành học và tương lai lý tưởng",
        cta: "Bắt Đầu"
      },
      features: {
        title: "WhichPath Hoạt Động Như Thế Nào",
        test: {
          title: "Đánh Giá Tính Cách & Kỹ Năng",
          desc: "Thực hiện các bài kiểm tra toàn diện để hiểu đặc điểm, sở thích và năng khiếu của bạn"
        },
        advice: {
          title: "Đề Xuất Nghề Nghiệp AI",
          desc: "Nhận gợi ý ngành học và nghề nghiệp cá nhân hóa dựa trên hồ sơ độc đáo của bạn"
        },
        university: {
          title: "Ghép Nối Trường Đại Học",
          desc: "Tìm kiếm các trường đại học và chương trình hoàn hảo phù hợp với mục tiêu nghề nghiệp"
        },
        chat: {
          title: "Cố Vấn Nghề Nghiệp AI",
          desc: "Đặt câu hỏi về ngành học, việc làm và trường đại học - nhận hướng dẫn chuyên gia ngay lập tức"
        }
      },
      partnership: {
        title: "Hợp Tác Với Chúng Tôi",
        subtitle: "Chuyển Đổi Hướng Dẫn Nghề Nghiệp Tại Cơ Sở Của Bạn",
        desc: "Tham gia cùng các trường học và trung tâm giảng dạy hàng đầu sử dụng WhichPath để cung cấp hướng dẫn nghề nghiệp đẳng cấp thế giới cho học sinh.",
        benefits: [
          "Đánh giá nghề nghiệp toàn diện bằng AI",
          "Hướng dẫn cá nhân hóa cho mọi học sinh",
          "Ghép nối trường đại học và chương trình theo thời gian thực",
          "Phân tích và báo cáo chi tiết",
          "Tích hợp liền mạch với hệ thống của bạn"
        ],
        cta: "Liên Hệ Hợp Tác"
      },
      footer: {
        contact: "Liên Hệ",
        email: "official@whichpath.ai",
        cooperation: "Để hợp tác và cơ hội quảng cáo"
      }
    }
  };

  const t = content[language as keyof typeof content];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white">
      {/* Language Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <div className="flex bg-white rounded-full shadow-lg border border-gray-200 overflow-hidden">
          <button
            onClick={() => setLanguage('en')}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              language === 'en' 
                ? 'bg-yellow-400 text-black' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('vi')}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              language === 'vi' 
                ? 'bg-yellow-400 text-black' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            VI
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <img 
                src="/lovable-uploads/fc924330-a2fd-4538-a013-84e7ddd3fc7b.png" 
                alt="WhichPath Logo" 
                className="h-16 w-auto"
              />
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t.hero.title}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t.hero.subtitle}
            </p>
            <Button 
              size="lg" 
              className="bg-yellow-400 hover:bg-yellow-500 text-black text-lg px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              {t.hero.cta}
              <ArrowUp className="ml-2 h-5 w-5 rotate-45" />
            </Button>
          </div>
        </div>
        
        {/* Background Decoration */}
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-yellow-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-yellow-300 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
            {t.features.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-200 transition-colors">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t.features.test.title}
                </h3>
                <p className="text-gray-600">
                  {t.features.test.desc}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t.features.advice.title}
                </h3>
                <p className="text-gray-600">
                  {t.features.advice.desc}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                  <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t.features.university.title}
                </h3>
                <p className="text-gray-600">
                  {t.features.university.desc}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                  <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t.features.chat.title}
                </h3>
                <p className="text-gray-600">
                  {t.features.chat.desc}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              {t.partnership.title}
            </h2>
            <h3 className="text-xl lg:text-2xl text-yellow-400 mb-8">
              {t.partnership.subtitle}
            </h3>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              {t.partnership.desc}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {t.partnership.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-left">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button 
              size="lg" 
              className="bg-yellow-400 hover:bg-yellow-500 text-black text-lg px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-200"
            >
              {t.partnership.cta}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/fc924330-a2fd-4538-a013-84e7ddd3fc7b.png" 
                alt="WhichPath Logo" 
                className="h-12 w-auto mx-auto mb-4 filter invert"
              />
            </div>
            
            <h3 className="text-xl font-semibold mb-4">{t.footer.contact}</h3>
            <p className="text-yellow-400 text-lg font-medium mb-2">
              {t.footer.email}
            </p>
            <p className="text-gray-400">
              {t.footer.cooperation}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

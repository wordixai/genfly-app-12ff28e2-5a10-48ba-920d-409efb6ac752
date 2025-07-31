import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComicGenerator from "@/components/ComicGenerator";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Zap, Heart, Star, Users, Clock, Shield } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "AI驱动",
      description: "使用最新的OpenAI技术，智能理解文本内容并生成精美漫画"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "快速生成",
      description: "只需几分钟即可将您的文字故事转换为四格漫画"
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "简单易用",
      description: "无需任何绘画技能，输入文本即可创作专业级漫画"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "安全可靠",
      description: "您的创作数据安全存储，隐私保护一流"
    }
  ];

  const testimonials = [
    {
      name: "小明",
      role: "内容创作者",
      content: "太棒了！我终于可以把我的故事想法快速变成漫画了。质量超出预期！",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face&auto=format"
    },
    {
      name: "李老师",
      role: "小学教师",
      content: "用来给学生制作教学漫画特别棒，孩子们都很喜欢，学习效果也提升了。",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b490?w=60&h=60&fit=crop&crop=face&auto=format"
    },
    {
      name: "张设计师",
      role: "UI设计师",
      content: "作为设计师，我被AI的创作能力震撼了。这将改变内容创作的方式。",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face&auto=format"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold font-heading">
                将<span className="text-gradient">文字</span>变成
                <br />
                <span className="text-gradient">精彩漫画</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                使用先进的AI技术，瞬间将您的故事文本转换为生动有趣的四格漫画。
                让创意插上翅膀，让故事活起来！
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="btn-hero text-xl px-10 py-6 animate-bounce-subtle">
                <Sparkles className="w-6 h-6 mr-2" />
                立即开始创作
              </Button>
              <Button className="btn-secondary text-lg px-8 py-4">
                查看示例作品
              </Button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 pt-4">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>10,000+ 用户</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>4.9/5 评分</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-purple-500" />
                <span>50,000+ 漫画</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comic Generator Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto">
          <ComicGenerator />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-heading mb-4">
              为什么选择我们的<span className="text-gradient">AI漫画生成器</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              我们结合了最先进的AI技术和用户友好的设计，为您提供最佳的漫画创作体验
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="card-glass hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-heading mb-4">
              用户<span className="text-gradient">真实评价</span>
            </h2>
            <p className="text-xl text-gray-600">
              看看其他创作者是如何使用我们的工具的
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-glass">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-hero-gradient text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold font-heading">
              准备开始您的创作之旅了吗？
            </h2>
            <p className="text-xl opacity-90">
              加入数万名创作者，一起用AI技术创造出令人惊艳的漫画作品
            </p>
            <Button className="bg-white text-purple-600 hover:bg-gray-100 text-xl px-10 py-6 font-semibold">
              <Sparkles className="w-6 h-6 mr-2" />
              免费开始创作
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
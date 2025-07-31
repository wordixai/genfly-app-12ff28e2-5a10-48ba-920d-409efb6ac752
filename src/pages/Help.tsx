import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Book, MessageCircle, Video, FileText } from "lucide-react";
import { useState } from "react";

const Help = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      icon: <Book className="w-8 h-8 text-blue-500" />,
      title: "快速入门",
      description: "了解如何快速开始使用AI漫画生成器"
    },
    {
      icon: <Video className="w-8 h-8 text-green-500" />,
      title: "视频教程",
      description: "观看详细的操作视频教程"
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-500" />,
      title: "使用指南",
      description: "详细的功能使用说明文档"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-orange-500" />,
      title: "联系支持",
      description: "遇到问题？直接联系我们的技术支持"
    }
  ];

  const faqs = [
    {
      question: "如何开始创作我的第一个四格漫画？",
      answer: "很简单！只需在文本框中输入您想要转换成漫画的故事，然后点击「生成漫画」按钮。AI会自动分析您的文本并生成四格漫画。整个过程通常只需要2-3分钟。"
    },
    {
      question: "什么样的文本内容效果最好？",
      answer: "建议使用具有明确情节发展的故事文本，包含人物、场景和动作描述。文本长度建议在50-200字之间，过短可能缺乏细节，过长可能导致信息冗余。"
    },
    {
      question: "生成的漫画分辨率是多少？",
      answer: "免费版提供标准分辨率（800x600），专业版提供高清分辨率（1920x1440），企业版支持超高清分辨率（3840x2880）。所有版本都支持PNG格式下载。"
    },
    {
      question: "可以编辑生成的漫画吗？",
      answer: "目前暂不支持在线编辑功能，但您可以重新输入文本来调整内容。我们计划在未来版本中加入编辑功能。"
    },
    {
      question: "生成失败了怎么办？",
      answer: "如果生成失败，请检查：1）文本内容是否符合社区规范；2）网络连接是否稳定；3）是否达到了当日生成次数限制。如果问题持续存在，请联系客服。"
    },
    {
      question: "支持哪些语言？",
      answer: "目前主要支持中文和英文输入，对于其他语言的支持正在开发中。建议使用中文获得最佳生成效果。"
    },
    {
      question: "如何提高生成质量？",
      answer: "建议：1）使用具体的描述而非抽象概念；2）包含人物的动作和表情；3）描述场景和背景；4）使用简洁清晰的语言；5）避免过于复杂的情节。"
    },
    {
      question: "账户和计费相关问题",
      answer: "您可以在账户设置中查看使用情况、升级套餐或取消订阅。付费套餐支持支付宝、微信支付等多种支付方式。如有计费疑问，请联系客服。"
    }
  ];

  const tutorials = [
    {
      title: "新手入门指南",
      description: "5分钟学会使用AI漫画生成器",
      duration: "5 分钟",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop&auto=format"
    },
    {
      title: "高质量文本编写技巧",
      description: "如何写出适合生成漫画的文本",
      duration: "8 分钟",
      thumbnail: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=300&h=200&fit=crop&auto=format"
    },
    {
      title: "商业用途最佳实践",
      description: "将AI漫画应用到商业场景",
      duration: "12 分钟",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop&auto=format"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
              <span className="text-gradient">帮助中心</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              找到您需要的答案，获得最佳的使用体验
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜索帮助内容..."
                className="pl-12 pr-4 py-6 text-lg rounded-full border-2"
              />
            </div>
          </section>

          {/* Categories */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {categories.map((category, index) => (
              <Card key={index} className="card-glass hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">{category.icon}</div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </section>

          {/* Video Tutorials */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">视频教程</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tutorials.map((tutorial, index) => (
                <Card key={index} className="card-glass hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={tutorial.thumbnail}
                        alt={tutorial.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-black/40 rounded-t-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <Button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white">
                          播放视频
                        </Button>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-sm px-2 py-1 rounded">
                        {tutorial.duration}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-lg mb-2">{tutorial.title}</h3>
                      <p className="text-gray-600 text-sm">{tutorial.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-12">常见问题</h2>
            <Card className="card-glass max-w-4xl mx-auto">
              <CardContent className="p-6">
                <Accordion type="single" collapsible>
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left hover:text-purple-600 transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </section>

          {/* Contact Support */}
          <section className="mt-16 text-center">
            <Card className="card-glass bg-hero-gradient text-white max-w-2xl mx-auto">
              <CardContent className="p-12">
                <MessageCircle className="w-16 h-16 mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4">还没找到答案？</h2>
                <p className="text-xl opacity-90 mb-6">
                  我们的客服团队随时为您提供帮助
                </p>
                <div className="space-y-4">
                  <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3 mr-4">
                    在线客服
                  </Button>
                  <Button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-3">
                    发送邮件
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Help;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "免费版",
      price: "¥0",
      period: "永久免费",
      description: "适合个人用户体验",
      features: [
        "每日3次免费生成",
        "基础四格漫画",
        "标准画质输出",
        "基本客服支持"
      ],
      buttonText: "立即开始",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "专业版",
      price: "¥29",
      period: "/月",
      description: "适合内容创作者",
      features: [
        "每日50次生成",
        "高清画质输出",
        "多种风格选择",
        "无水印下载",
        "优先客服支持",
        "商用授权"
      ],
      buttonText: "开始专业创作",
      buttonVariant: "default" as const,
      popular: true
    },
    {
      name: "企业版",
      price: "¥199",
      period: "/月",
      description: "适合团队和企业",
      features: [
        "无限次生成",
        "超高清画质",
        "自定义风格训练",
        "批量处理",
        "API接口访问",
        "专属客服经理",
        "定制化服务"
      ],
      buttonText: "联系销售",
      buttonVariant: "outline" as const,
      popular: false
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
              选择适合您的<span className="text-gradient">价格方案</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              无论您是个人创作者还是企业团队，我们都有适合的方案。
              开始您的AI漫画创作之旅，让创意无限可能。
            </p>
          </section>

          {/* Pricing Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`card-glass relative ${
                  plan.popular
                    ? "ring-2 ring-purple-500 transform scale-105 shadow-2xl"
                    : "hover:shadow-xl"
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-4 py-1">
                    <Star className="w-4 h-4 mr-1" />
                    最受欢迎
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-purple-600">{plan.price}</span>
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    className={`w-full ${
                      plan.buttonVariant === "default" ? "btn-hero" : ""
                    }`}
                    variant={plan.buttonVariant}
                    size="lg"
                  >
                    {plan.popular && <Zap className="w-5 h-5 mr-2" />}
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </section>

          {/* FAQ Section */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-12">常见问题</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  question: "可以随时取消订阅吗？",
                  answer: "是的，您可以随时在账户设置中取消订阅，取消后仍可使用至当前计费周期结束。"
                },
                {
                  question: "生成的漫画可以商用吗？",
                  answer: "专业版和企业版用户可以将生成的漫画用于商业用途，免费版仅限个人使用。"
                },
                {
                  question: "支持哪些支付方式？",
                  answer: "我们支持支付宝、微信支付、银联卡等多种支付方式，安全便捷。"
                },
                {
                  question: "有免费试用期吗？",
                  answer: "新用户注册即可享受免费版功能，专业版用户可享受7天免费试用期。"
                }
              ].map((faq, index) => (
                <Card key={index} className="card-glass">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center mt-16">
            <Card className="card-glass bg-hero-gradient text-white">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4">还有疑问？</h2>
                <p className="text-xl opacity-90 mb-6">
                  我们的客服团队随时为您解答任何问题
                </p>
                <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3">
                  联系客服
                </Button>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
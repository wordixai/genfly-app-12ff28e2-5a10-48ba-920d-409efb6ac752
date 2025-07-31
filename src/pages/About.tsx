import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Target, Users, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
              关于<span className="text-gradient">AI漫画生成器</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              我们致力于通过先进的AI技术，让每个人都能轻松创作出专业级的漫画作品。
              让创意不再受限于技能，让故事以最生动的方式呈现。
            </p>
          </section>

          {/* Mission & Vision */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="card-glass">
              <CardContent className="p-8 text-center space-y-4">
                <Target className="w-12 h-12 text-purple-600 mx-auto" />
                <h3 className="text-2xl font-bold">我们的使命</h3>
                <p className="text-gray-600 leading-relaxed">
                  让AI技术服务于创意表达，帮助每个人都能够轻松地将想法转化为视觉作品，
                  打破传统创作的技术壁垒，让创意成为每个人的超能力。
                </p>
              </CardContent>
            </Card>

            <Card className="card-glass">
              <CardContent className="p-8 text-center space-y-4">
                <Sparkles className="w-12 h-12 text-pink-600 mx-auto" />
                <h3 className="text-2xl font-bold">我们的愿景</h3>
                <p className="text-gray-600 leading-relaxed">
                  成为全球最受欢迎的AI创意工具平台，让每个人都能够自由表达创意，
                  创造出令人惊艳的视觉内容，推动创意产业的数字化革命。
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Story */}
          <section className="mb-16">
            <Card className="card-glass">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-center mb-8">我们的故事</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <p className="text-gray-700 leading-relaxed">
                      我们的团队由一群热爱创意和技术的开发者组成。在看到许多有趣的故事想法因为缺乏绘画技能而无法呈现时，
                      我们决定利用AI技术来解决这个问题。
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      经过数月的研发和优化，我们基于OpenAI的先进模型开发出了这个四格漫画生成器。
                      它不仅能理解复杂的文本内容，还能生成符合漫画风格的精美画面。
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      如今，已有超过10,000名用户使用我们的工具创作了50,000多部漫画作品，
                      涵盖了教育、娱乐、商业等多个领域。
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=400&fit=crop&auto=format"
                      alt="团队协作"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Stats */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="card-glass text-center">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-blue-600">10,000+</h3>
                <p className="text-gray-600">活跃用户</p>
              </CardContent>
            </Card>

            <Card className="card-glass text-center">
              <CardContent className="p-6">
                <Sparkles className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-purple-600">50,000+</h3>
                <p className="text-gray-600">生成的漫画</p>
              </CardContent>
            </Card>

            <Card className="card-glass text-center">
              <CardContent className="p-6">
                <Zap className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-yellow-600">99%</h3>
                <p className="text-gray-600">用户满意度</p>
              </CardContent>
            </Card>
          </section>

          {/* Team */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-12">我们的团队</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "张伟",
                  role: "创始人 & CEO",
                  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face&auto=format",
                  description: "10年AI研发经验，前Google工程师"
                },
                {
                  name: "李小雅",
                  role: "技术总监",
                  avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b490?w=200&h=200&fit=crop&crop=face&auto=format",
                  description: "AI算法专家，斯坦福大学博士"
                },
                {
                  name: "王设计",
                  role: "产品设计师",
                  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face&auto=format",
                  description: "资深UX设计师，苹果公司前设计师"
                }
              ].map((member, index) => (
                <Card key={index} className="card-glass text-center">
                  <CardContent className="p-6 space-y-4">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-purple-600 font-medium">{member.role}</p>
                    </div>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
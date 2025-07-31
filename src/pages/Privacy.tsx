import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold font-heading text-center mb-8">
              <span className="text-gradient">隐私政策</span>
            </h1>
            <p className="text-center text-gray-600 mb-12">
              最后更新：2024年1月1日
            </p>

            <Card className="card-glass">
              <CardContent className="p-8 prose prose-lg max-w-none">
                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">1. 概述</h2>
                    <p className="text-gray-700 leading-relaxed">
                      AI漫画生成器（以下简称"我们"）非常重视用户的隐私保护。本隐私政策说明了我们如何收集、使用、存储和保护您的个人信息。
                      使用我们的服务即表示您同意本隐私政策的条款。
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">2. 信息收集</h2>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">2.1 我们收集的信息类型：</h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>账户信息：用户名、邮箱地址、密码（加密存储）</li>
                      <li>创作内容：您输入的文本和生成的漫画</li>
                      <li>使用数据：访问时间、功能使用情况、设备信息</li>
                      <li>技术信息：IP地址、浏览器类型、操作系统</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">2.2 信息收集方式：</h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>您主动提供的信息（注册、创作时）</li>
                      <li>自动收集的技术信息（通过cookies和日志）</li>
                      <li>第三方服务提供的信息（如社交媒体登录）</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">3. 信息使用</h2>
                    <p className="text-gray-700 mb-4">我们使用收集的信息用于：</p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>提供和改进漫画生成服务</li>
                      <li>用户身份验证和账户管理</li>
                      <li>个性化用户体验</li>
                      <li>客户支持和技术维护</li>
                      <li>遵守法律法规要求</li>
                      <li>防止欺诈和滥用行为</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">4. 信息共享</h2>
                    <p className="text-gray-700 mb-4">我们承诺不会出售您的个人信息。在以下情况下，我们可能会共享您的信息：</p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>获得您的明确同意</li>
                      <li>与可信赖的服务提供商合作（如云存储、支付处理）</li>
                      <li>遵守法律要求或法院命令</li>
                      <li>保护我们的权利、财产或安全</li>
                      <li>业务转让或合并情况</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">5. 数据安全</h2>
                    <p className="text-gray-700 mb-4">我们采取多重安全措施保护您的信息：</p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>SSL加密传输</li>
                      <li>数据库加密存储</li>
                      <li>访问控制和权限管理</li>
                      <li>定期安全审计</li>
                      <li>备份和灾难恢复</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">6. 用户权利</h2>
                    <p className="text-gray-700 mb-4">根据相关法律法规，您享有以下权利：</p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>访问权：查看我们持有的您的个人信息</li>
                      <li>更正权：更新或修正不准确的信息</li>
                      <li>删除权：要求删除您的个人信息</li>
                      <li>限制处理权：限制我们处理您的信息</li>
                      <li>数据可携权：获取您的数据副本</li>
                      <li>反对权：反对某些类型的数据处理</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies政策</h2>
                    <p className="text-gray-700 mb-4">我们使用cookies来：</p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>保持您的登录状态</li>
                      <li>记住您的偏好设置</li>
                      <li>分析网站使用情况</li>
                      <li>提供个性化体验</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      您可以通过浏览器设置管理cookies，但这可能影响某些功能的正常使用。
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">8. 儿童隐私</h2>
                    <p className="text-gray-700">
                      我们的服务面向13岁以上用户。我们不会故意收集13岁以下儿童的个人信息。
                      如果发现有此类信息，我们将立即删除。
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">9. 国际传输</h2>
                    <p className="text-gray-700">
                      您的数据可能在您所在国家/地区以外的地方进行处理和存储。我们确保这些传输符合适用的数据保护法律，
                      并采取适当的安全措施。
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">10. 政策更新</h2>
                    <p className="text-gray-700">
                      我们可能不时更新本隐私政策。重大变更时，我们会通过邮件或网站公告通知您。
                      继续使用我们的服务即表示您接受更新后的政策。
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">11. 联系我们</h2>
                    <p className="text-gray-700 mb-4">
                      如果您对本隐私政策有任何疑问或需要行使您的权利，请通过以下方式联系我们：
                    </p>
                    <ul className="list-none text-gray-700 space-y-2">
                      <li>邮箱：privacy@ai-comic.com</li>
                      <li>电话：400-123-4567</li>
                      <li>地址：北京市朝阳区创新大厦10楼</li>
                    </ul>
                  </section>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
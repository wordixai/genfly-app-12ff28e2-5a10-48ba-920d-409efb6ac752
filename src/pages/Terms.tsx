import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold font-heading text-center mb-8">
              <span className="text-gradient">使用条款</span>
            </h1>
            <p className="text-center text-gray-600 mb-12">
              最后更新：2024年1月1日
            </p>

            <Card className="card-glass">
              <CardContent className="p-8 prose prose-lg max-w-none">
                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">1. 接受条款</h2>
                    <p className="text-gray-700 leading-relaxed">
                      欢迎使用AI漫画生成器！通过访问或使用我们的服务，您表示同意受本使用条款的约束。
                      如果您不同意这些条款，请不要使用我们的服务。
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">2. 服务描述</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      AI漫画生成器是一个基于人工智能技术的在线服务，允许用户将文本内容转换为四格漫画。
                      我们的服务包括但不限于：
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>文本到漫画的AI生成功能</li>
                      <li>漫画下载和分享功能</li>
                      <li>用户账户管理</li>
                      <li>客户支持服务</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">3. 用户账户</h2>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">3.1 账户创建</h3>
                    <p className="text-gray-700 mb-4">
                      您必须提供准确、完整的注册信息，并及时更新您的账户信息。您有责任保护您的账户密码安全。
                    </p>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">3.2 账户使用</h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>一个人只能创建一个账户</li>
                      <li>不得与他人共享账户</li>
                      <li>不得使用虚假信息注册</li>
                      <li>及时报告账户安全问题</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">4. 使用规则</h2>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">4.1 禁止行为</h3>
                    <p className="text-gray-700 mb-4">在使用我们的服务时，您不得：</p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>生成违法、有害、威胁性或诽谤性内容</li>
                      <li>生成侵犯他人知识产权的内容</li>
                      <li>生成色情、暴力或仇恨言论内容</li>
                      <li>尝试绕过使用限制或技术保护措施</li>
                      <li>干扰或破坏服务的正常运行</li>
                      <li>进行任何形式的网络攻击</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">4.2 内容审核</h3>
                    <p className="text-gray-700">
                      我们保留审核、监控或删除任何违反本条款的内容的权利，但这并不意味着我们有义务进行此类审核。
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">5. 知识产权</h2>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">5.1 服务知识产权</h3>
                    <p className="text-gray-700 mb-4">
                      我们的服务、软件、商标、版权和其他知识产权归我们所有。用户仅获得有限的使用许可。
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">5.2 用户生成内容</h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>您保留对原始输入文本的所有权</li>
                      <li>生成的漫画的使用权根据您的订阅计划确定</li>
                      <li>免费用户：仅限个人非商业使用</li>
                      <li>付费用户：可用于商业用途（根据具体计划）</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">6. 付费服务</h2>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">6.1 订阅和计费</h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>付费服务按月或年度订阅</li>
                      <li>费用在订阅时收取</li>
                      <li>自动续订，除非您取消订阅</li>
                      <li>价格可能根据市场情况调整</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">6.2 退款政策</h3>
                    <p className="text-gray-700">
                      新用户可在订阅后7天内申请全额退款。超过7天后，根据具体情况处理退款申请。
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">7. 免责声明</h2>
                    <p className="text-gray-700 mb-4">
                      我们的服务按"现状"提供，不提供任何明示或暗示的保证，包括但不限于：
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>服务的可用性、准确性或可靠性</li>
                      <li>生成内容的质量或适用性</li>
                      <li>服务不会中断或无错误</li>
                      <li>满足您的特定需求</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">8. 责任限制</h2>
                    <p className="text-gray-700">
                      在法律允许的最大范围内，我们不对任何间接、偶然、特殊或后果性损害承担责任，
                      包括但不限于利润损失、数据损失或业务中断。我们的总责任不超过您在过去12个月内支付的费用。
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">9. 服务终止</h2>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">9.1 由您终止</h3>
                    <p className="text-gray-700 mb-4">
                      您可以随时停止使用我们的服务并删除您的账户。
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">9.2 由我们终止</h3>
                    <p className="text-gray-700">
                      如果您违反本条款，我们可能会暂停或终止您的账户。我们也可能因商业原因终止服务，
                      会提前30天通知用户。
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">10. 争议解决</h2>
                    <p className="text-gray-700">
                      本条款受中华人民共和国法律管辖。任何争议应首先通过友好协商解决。
                      如协商不成，应提交至我们所在地有管辖权的人民法院解决。
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">11. 条款修改</h2>
                    <p className="text-gray-700">
                      我们可能不时修改本使用条款。重大修改会提前30天通知用户。
                      修改后继续使用服务即表示您接受新的条款。
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">12. 联系信息</h2>
                    <p className="text-gray-700 mb-4">
                      如果您对本使用条款有任何疑问，请联系我们：
                    </p>
                    <ul className="list-none text-gray-700 space-y-2">
                      <li>邮箱：legal@ai-comic.com</li>
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

export default Terms;
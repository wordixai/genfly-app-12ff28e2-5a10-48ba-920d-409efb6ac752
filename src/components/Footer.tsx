import { Link } from "react-router-dom";
import { Sparkles, Mail, Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-gradient">AI漫画生成器</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              使用最先进的AI技术，将您的文字故事转换成精彩的四格漫画。让创意无限可能。
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">产品</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">
                  关于我们
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-primary transition-colors">
                  价格方案
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-gray-600 hover:text-primary transition-colors">
                  帮助中心
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">法律信息</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-primary transition-colors">
                  隐私政策
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-primary transition-colors">
                  使用条款
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">联系我们</h3>
            <div className="flex space-x-4">
              <a
                href="mailto:support@ai-comic.com"
                className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2024 AI漫画生成器. 保留所有权利。
          </p>
          <p className="text-gray-600 text-sm mt-2 md:mt-0">
            由 ❤️ 和 AI 技术驱动
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
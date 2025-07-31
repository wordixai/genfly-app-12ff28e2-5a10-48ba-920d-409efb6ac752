import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { Sparkles, Download, Share2, RefreshCw } from "lucide-react";

const ComicGenerator = () => {
  const [text, setText] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [comicPanels, setComicPanels] = useState<string[]>([]);
  const { toast } = useToast();

  const simulateGeneration = async () => {
    setIsGenerating(true);
    setProgress(0);
    setComicPanels([]);

    // Simulate progress
    const progressSteps = [
      { value: 10, message: "分析文本内容..." },
      { value: 30, message: "生成故事情节..." },
      { value: 50, message: "创建第一个画面..." },
      { value: 65, message: "创建第二个画面..." },
      { value: 80, message: "创建第三个画面..." },
      { value: 95, message: "创建第四个画面..." },
      { value: 100, message: "完成！" }
    ];

    for (const step of progressSteps) {
      await new Promise(resolve => setTimeout(resolve, 800));
      setProgress(step.value);
      
      if (step.value === 100) {
        // Simulate generated comic panels
        setComicPanels([
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=left",
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=right",
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=bottom"
        ]);
        
        toast({
          title: "漫画生成完成！",
          description: "您的四格漫画已经生成完成，可以下载或分享。",
        });
      }
    }

    setIsGenerating(false);
  };

  const handleGenerate = () => {
    if (!text.trim()) {
      toast({
        title: "请输入文本",
        description: "请先输入您想要转换成漫画的故事文本。",
        variant: "destructive",
      });
      return;
    }

    simulateGeneration();
  };

  const handleDownload = () => {
    toast({
      title: "下载开始",
      description: "您的漫画正在下载中...",
    });
  };

  const handleShare = () => {
    toast({
      title: "分享链接已复制",
      description: "您可以将链接分享给朋友一起欣赏您的作品！",
    });
  };

  const LoadingAnimation = () => (
    <div className="flex flex-col items-center justify-center py-20 space-y-6">
      <div className="loading-dots">
        {[...Array(3)].map((_, i) => (
          <div key={i} style={{ "--i": i } as any} />
        ))}
      </div>
      <div className="w-full max-w-md space-y-2">
        <Progress value={progress} className="w-full" />
        <p className="text-sm text-gray-600 text-center">
          {progress < 10 && "分析文本内容..."}
          {progress >= 10 && progress < 30 && "生成故事情节..."}
          {progress >= 30 && progress < 50 && "创建第一个画面..."}
          {progress >= 50 && progress < 65 && "创建第二个画面..."}
          {progress >= 65 && progress < 80 && "创建第三个画面..."}
          {progress >= 80 && progress < 95 && "创建第四个画面..."}
          {progress >= 95 && "完成！"}
        </p>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Input Section */}
      <Card className="card-glass">
        <CardContent className="p-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-center">创作您的四格漫画</h2>
            <p className="text-gray-600 text-center">
              输入您的故事文本，AI将为您生成精彩的四格漫画
            </p>
            
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="请输入您想要转换成漫画的故事文本，比如：小猫咪看到一只蝴蝶，好奇地跟着它，结果迷路了，最后在主人的帮助下找到了回家的路..."
              className="min-h-[120px] text-base"
              disabled={isGenerating}
            />
            
            <div className="flex justify-center">
              <Button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="btn-hero min-w-[200px]"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                    生成中...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-2" />
                    生成漫画
                  </>
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Section */}
      <Card className="card-glass">
        <CardContent className="p-6">
          {isGenerating ? (
            <LoadingAnimation />
          ) : comicPanels.length > 0 ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">您的四格漫画</h3>
                <div className="flex space-x-2">
                  <Button
                    onClick={handleDownload}
                    variant="outline"
                    className="flex items-center space-x-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>下载</span>
                  </Button>
                  <Button
                    onClick={handleShare}
                    variant="outline"
                    className="flex items-center space-x-2"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>分享</span>
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {comicPanels.map((panel, index) => (
                  <div key={index} className="comic-panel aspect-video animate-fade-in">
                    <img
                      src={panel}
                      alt={`漫画第${index + 1}格`}
                      className="relative z-10 w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded z-20">
                      第{index + 1}格
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-20 text-gray-500">
              <Sparkles className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <p className="text-lg">输入文本并点击生成按钮开始创作</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ComicGenerator;
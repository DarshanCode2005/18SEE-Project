import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface NewsletterFormProps {
  variant?: 'section' | 'footer';
}

export const NewsletterForm = ({ variant = 'section' }: NewsletterFormProps) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call - replace with actual Mailchimp/Formspree integration
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setShowConfirmation(true);
      setEmail('');
      toast({
        title: "Successfully Subscribed!",
        description: "You'll receive updates about 18SEE 2025.",
      });
    } catch (error) {
      toast({
        title: "Subscription Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const formContent = (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <div className="flex-1">
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={variant === 'footer' ? "bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60" : ""}
          disabled={isLoading}
        />
      </div>
      <Button 
        type="submit" 
        disabled={isLoading}
        variant={variant === 'footer' ? "secondary" : "default"}
        className="shrink-0"
      >
        {isLoading ? (
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : (
          <>
            <Send className="h-4 w-4 mr-2" />
            Subscribe
          </>
        )}
      </Button>
    </form>
  );

  if (variant === 'footer') {
    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Mail className="h-5 w-5 text-secondary" />
          <h4 className="font-semibold text-lg">Stay Updated</h4>
        </div>
        <p className="text-primary-foreground/80 text-sm">
          Get the latest updates about 18SEE 2025
        </p>
        {formContent}
        
        {/* Confirmation Dialog */}
        <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                Subscription Confirmed!
              </DialogTitle>
            </DialogHeader>
            <div className="text-center py-4">
              <p className="text-muted-foreground mb-4">
                Thank you for subscribing! You'll receive updates about the 18th Symposium on Earthquake Engineering.
              </p>
              <Button onClick={() => setShowConfirmation(false)}>
                Continue
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  return (
    <section id="newsletter" className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                <Mail className="h-8 w-8 text-secondary-foreground" />
              </div>
            </div>
            
            <h2 className="text-3xl font-serif font-bold mb-4 text-primary-foreground">
              Stay Connected with 18SEE 2025
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Subscribe for the latest updates on speakers, schedule changes, 
              special announcements, and exclusive content from the symposium.
            </p>
            
            <div className="max-w-md mx-auto">
              {formContent}
            </div>
            
            <p className="text-sm text-primary-foreground/70 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </CardContent>
        </Card>
        
        {/* Confirmation Dialog */}
        <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                Subscription Confirmed!
              </DialogTitle>
            </DialogHeader>
            <div className="text-center py-4">
              <p className="text-muted-foreground mb-4">
                Thank you for subscribing! You'll receive updates about the 18th Symposium on Earthquake Engineering.
              </p>
              <Button onClick={() => setShowConfirmation(false)}>
                Continue
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export const NewsletterSection = NewsletterForm;
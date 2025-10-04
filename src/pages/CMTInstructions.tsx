import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Download } from "lucide-react";
import { Link } from "react-router-dom";

// Import instruction images
import step1 from "@/assets/instructions image/step 1.png";
import step2 from "@/assets/instructions image/step 2.png";
import step3 from "@/assets/instructions image/step 3.png";
import step4a from "@/assets/instructions image/Step 4a.png";
import step4b from "@/assets/instructions image/step 4b.png";
import step5 from "@/assets/instructions image/step 5.png";
import step6 from "@/assets/instructions image/Step 6.png";
import step7 from "@/assets/instructions image/Step 7.png";
import step8 from "@/assets/instructions image/step 8.png";
import step9 from "@/assets/instructions image/step 9.png";

export const CMTInstructions = () => {
  const steps = [
    {
      id: 1,
      title: "Step 1: Registration Check",
      content: (
        <>
          If you already hold a CMT account, skip to <strong>Step 5</strong>. If not, click <span className="text-teal-600 font-medium">Register</span>.
        </>
      ),
      image: step1
    },
    {
      id: 2,
      title: "Step 2: Create Account",
      content: (
        <>
          Create your login credentials (include the email address you wish to receive updates on about the event), fill in your particulars, enter the captcha characters (under Verification), and tick the agreement statement. Finally, click <span className="text-teal-600 font-medium">Register</span>.
        </>
      ),
      image: step2
    },
    {
      id: 3,
      title: "Step 3: Registration Confirmation",
      content: (
        <>
          You should see the following webpage after successfully executing <strong>Step 2</strong>. As indicated, now login to your registered email.
        </>
      ),
      image: step3
    },
    {
      id: 4,
      title: "Step 4a: Email Verification",
      content: (
        <>
          On your registered email, open the 'Account Verification' message from CMT and click the activation link.
        </>
      ),
      image: step4a
    },
    {
      id: 5,
      title: "Step 4b: Account Activated",
      content: (
        <>
          On doing so, you shall be directed to the following webpage and this means that you can now login at{" "}
          <a 
            href="https://cmt3.research.microsoft.com/SEE2026" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-teal-600 font-medium hover:text-teal-700 underline"
          >
            https://cmt3.research.microsoft.com/SEE2026
          </a>
        </>
      ),
      image: step4b
    },
    {
      id: 6,
      title: "Step 5: Login",
      content: (
        <>
          Enter your CMT login credentials and click <span className="text-teal-600 font-medium">Log In</span>.
        </>
      ),
      image: step5
    },
    {
      id: 7,
      title: "Step 6: Create Submission",
      content: (
        <>
          You should see the below interface. Click <span className="text-teal-600 font-medium">Create new submission</span>.
        </>
      ),
      image: step6
    },
    {
      id: 8,
      title: "Step 7: Submit Abstract",
      content: (
        <>
          Enter the <strong>title of your abstract</strong> in the indicated space and add <strong>other contributing authors</strong> (if applicable). Next, upload the <strong>.docx</strong> file containing your Abstract. Further, select <span className="text-teal-600 font-medium">Yes</span> from the drop-down menu under <strong>1. Corresponding Author</strong> query if you are indeed the corresponding author <strong>or</strong> else, <span className="text-teal-600 font-medium">No</span>. After carefully reviewing the above information, click the <span className="text-teal-600 font-medium">Submit</span> button and you will have successfully submitted your abstract!
        </>
      ),
      image: step7
    },
    {
      id: 9,
      title: "Step 8: Submission Confirmation",
      content: (
        <>
          You and your co-authors shall be notified about this submission on your respective emails. Click <strong>Done</strong> at the bottom of the resulting page of the interface and you shall see a page (see the next image) with summary of your submission.
        </>
      ),
      image: step8
    },
    {
      id: 10,
      title: "Step 9: Edit Submission (Optional)",
      content: (
        <>
          In case you wish to edit your submission (e.g., change the abstract title, upload a revised abstract file, change author information, etc.), you can do so by clicking <strong>Edit Submission</strong> at the bottom. This option is also available in your <strong>Author Console</strong> interface.
        </>
      ),
      image: step9
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" size="sm" asChild className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-white">
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            CMT Registration Instructions
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-3xl">
            Follow these simple steps to submit your Abstract for 18SEE-2026 using Microsoft's CMT portal.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Introduction Message */}
        <div className="bg-card border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-primary">Dear Authors,</h2>
          <p className="text-muted-foreground leading-relaxed">
            Please follow the below simple steps to submit your Abstract for 18SEE-2026. In summary, the Abstract is to be uploaded as a single file to Microsoft's CMT portal and this is to be prepared (preferably in .docx format) using the abstract template provided on the Symposium website.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a href="https://cmt3.research.microsoft.com/SEE2026" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Open CMT Portal
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/Abstract_Template.docx" download>
                <Download className="h-4 w-4 mr-2" />
                Download Abstract Template
              </a>
            </Button>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={step.id} className="bg-card border rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      {step.id}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-primary">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {step.content}
                    </p>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <img 
                        src={step.image} 
                        alt={`Step ${step.id} illustration`}
                        className="w-full h-auto rounded border"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="mt-12 bg-card border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">Ready to Submit?</h3>
          <p className="text-muted-foreground mb-6">
            Follow the steps above to submit your abstract. If you encounter any issues, please contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a href="https://cmt3.research.microsoft.com/SEE2026" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Go to CMT Portal
              </a>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

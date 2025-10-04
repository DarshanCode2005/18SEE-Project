import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Download, X, ZoomIn } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

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
import step10 from "@/assets/instructions image/step 10.png";
import iitroorkee from "@/assets/iitr_logo_about.png";

export const CMTInstructions = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const steps = [
    {
      id: 1,
      title: "CMT Registration",
      content: (
        <>
          Visit 18SEE CMT portal{" "}
          <a 
            href="https://cmt3.research.microsoft.com/SEE2026" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-teal-600 font-medium hover:text-teal-700 underline"
          >
            (https://cmt3.research.microsoft.com/SEE2026)
          </a>
          . If you already hold a CMT account, skip to step 3. Otherwise, click <span className="text-teal-600 font-medium">Register</span>.
        </>
      ),
      image: step1
    },
    {
      id: '2A',
      title: "Create CMT Account",
      isSubstep: true,
      parentStep: "Step 2",
      content: (
        <>
          Create your login credentials (include the email address you wish to receive updates on about the event), fill in your particulars, enter the captcha characters (under Verification), and tick the agreement statement. Finally, click <span className="text-teal-600 font-medium">Register</span>.
        </>
      ),
      image: step2
    },
    {
      id: '2B',
      title: "CMT Registration Confirmation",
      isSubstep: true,
      parentStep: "Step 2",
      content: (
        <>
          You should see the following webpage and, as directed, next login to your registered email. 
        </>
      ),
      image: step3
    },
    {
      id: '2C',
      title: "Account Activation",
      isSubstep: true,
      parentStep: "Step 2",
      content: (
        <>
          On your registered email, open the 'Account Verification' message from CMT and click the activation link.
        </>
      ),
      image: step4a
    },
    {
      id: '2D',
      title: "Account Activated",
      isSubstep: true,
      parentStep: "Step 2",
      content: (
        <>
          On doing so, you shall be directed to the below webpage. This means that you can now login at 18SEE CMT Portal using the credentials just created.
        </>
      ),
      image: step4b
    },
    {
      id: 3,
      title: "18SEE CMT Login",
      content: (
        <>
          Enter your CMT login credentials and click <span className="text-teal-600 font-medium">Log In</span>.
        </>
      ),
      image: step5
    },
    {
      id: 4,
      title: "Create Submission",
      content: (
        <>
          You should see the below interface. Click <span className="text-teal-600 font-medium">Create new submission</span>.
        </>
      ),
      image: step6
    },
    {
      id: 5,
      title: "Submit Abstract",
      content: (
        <>
          Enter the <span className="text-teal-600 font-medium">title of your abstract</span> and add <span className="text-teal-600 font-medium">other contributing authors</span> (if applicable). Next, upload the <span className="text-teal-600 font-medium">.docx</span> file containing your Abstract. Further, select <span className="text-teal-600 font-medium">Yes</span> from the drop-down menu under <span className="text-teal-600 font-medium">1. Corresponding Author</span> query if you are indeed the corresponding author <span className="text-teal-600 font-medium">or</span> else, <span className="text-teal-600 font-medium">No</span>. After carefully reviewing the above information, click the <span className="text-teal-600 font-medium">Submit</span> button and you will have successfully submitted your abstract!
        </>
      ),
      image: step7
    },
    {
      id: 6,
      title: "Submission Confirmation",
      content: (
        <>
          You and your co-authors shall be notified about this submission on your respective emails. Click Done at the bottom of the page and you shall subsequently see a summary of your submission (see the next image).
        </>
      ),
      image: step8
    },
    {
      id: 7,
      title: "Edit Submission (Optional)",
      content: (
        <>
          In case you wish to edit your submission (e.g., change the abstract title, upload a revised abstract file, change author information, etc.), you can do so by clicking <span className="text-teal-600 font-medium">Edit Submission</span> at the bottom. This option is also available in your <span className="text-teal-600 font-medium">Author Console</span> interface.
        </>
      ),
      image: step10
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
          
          <div className="flex items-center justify-center relative min-h-[120px]">
            <img 
              src={iitroorkee} 
              alt="IIT Roorkee Logo" 
              className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 w-auto flex-shrink-0 absolute left-4 top-1/2 transform -translate-y-1/2"
            />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center">
              Abstract Submission
            </h1>
          </div>

          
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Introduction Message */}
        <div className="bg-card border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-primary">Dear Authors,</h2>
          <p className="font-semibold mb-4 text-primary text-lg">
          Please follow the simple steps below to submit your Abstract for 18SEE-2026. In summary, the Abstract must be uploaded as a single file through the Microsoft CMT portal of 18SEE. Further, it should be prepared using the provided template, preferably in .docx format.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a href="https://cmt3.research.microsoft.com/SEE2026" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                18SEE CMT Portal
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
        <div className="space-y-6">
          {steps.map((step, index) => {
            const isSubstep = step.isSubstep;
            const isMainStep = !isSubstep;
            const showParentHeader = index === 0 || (steps[index - 1] && steps[index - 1].isSubstep !== isSubstep);
            
            return (
              <div key={step.id}>
                {/* Main Step Header */}
                {isMainStep && (
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold text-primary border-l-4 border-primary pl-4">
                      Step {step.id}
                    </h2>
                  </div>
                )}
                
                {/* Parent Step Header for Substeps */}
                {isSubstep && showParentHeader && (
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold text-primary border-l-4 border-primary pl-4">
                      {step.parentStep}
                    </h2>
                  </div>
                )}
                
                {/* Step Card */}
                <div className={`bg-card border rounded-lg overflow-hidden ${isSubstep ? 'ml-6 sm:ml-8 md:ml-12' : ''}`}>
                  <div className="p-4 sm:p-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      {isSubstep && (
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary text-secondary-foreground border-2 border-primary/20 rounded-full flex items-center justify-center font-bold">
                            {step.id}
                          </div>
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h3 className={`font-semibold mb-2 sm:mb-3 text-primary ${
                          isSubstep ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'
                        }`}>
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                          {step.content}
                        </p>
                        <div className="bg-muted/50 rounded-lg p-2 sm:p-4">
                          <div className="relative group cursor-pointer overflow-hidden rounded border" onClick={() => setSelectedImage(step.image)}>
                            <div className="aspect-video w-full">
                              <img 
                                src={step.image} 
                                alt={`Step ${step.id} illustration`}
                                className="w-full h-full object-cover transition-transform group-hover:scale-105"
                              />
                            </div>
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                              <ZoomIn className="h-6 w-6 sm:h-8 sm:w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Actions */}
        <div className="mt-12 bg-card border rounded-lg p-6">
          <h3 className="text-center text-3xl font-semibold mb-4 text-primary">Ready to Submit?</h3>
          <p className="text-muted-foreground mb-6 text-center">
          Follow the above steps to submit your Abstract. If you encounter any issues, do not hesitate to
          contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a href="https://cmt3.research.microsoft.com/SEE2026" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                18SEE CMT Portal
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

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="h-8 w-8" />
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged instruction image"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

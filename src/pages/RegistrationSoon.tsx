import React from "react";
import { FormRenderer } from "@/components/FormRenderer";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function RegistrationSoon() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header with back button */}
      <div className="max-w-4xl mx-auto mb-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/18see/")}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>
      </div>

      {/* Page Title */}
      <div className="max-w-4xl mx-auto mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          Conference Registration
        </h1>
        <p className="text-lg text-gray-600">
          18th Symposium of Earthquake Engineering
        </p>
        <p className="text-sm text-gray-500 mt-1">
          IIT Roorkee, India • Dec 10-12, 2026
        </p>
      </div>

      {/* Registration Form */}
      <FormRenderer />

      {/* Footer note */}
      <div className="max-w-3xl mx-auto mt-8 text-center text-sm text-gray-500">
        <p>
          For any queries, please contact:{" "}
          <a
            href="mailto:18see@iitr.ac.in"
            className="text-blue-600 hover:underline"
          >
            18see@iitr.ac.in
          </a>
        </p>
      </div>
    </div>
  );
}

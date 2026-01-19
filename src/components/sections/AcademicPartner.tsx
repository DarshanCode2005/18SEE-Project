import iacmag from "@/assets/iac.jpg";
import igs from "@/assets/igs.jpg";

export const AcademicPartners =() => {
    return(
        <div className="flex flex-col items-center justify-center mb-4">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-4">Academic Partners</div>
            <div className="flex justify-center items-center gap-8">
                <img src={iacmag} alt="IACMAG" className="h-48 w-auto sm:h-56 z-10 object-contain" />
                <img src={igs} alt="IGS" className="h-48 w-auto sm:h-56 z-10 object-contain" />
            </div>
        </div>
    );
}
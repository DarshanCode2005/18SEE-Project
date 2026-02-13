import iacmag from "@/assets/iac.jpg";
import igs from "@/assets/igs.jpg";

export const AcademicPartners = () => {
    return (
        <section className="py-16 bg-muted/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif">Academic Partners</h2>
                    <div className="mt-4 h-1.5 w-24 bg-secondary mx-auto rounded-full" />
                </div>
                
                <div className="flex flex-col sm:flex-row justify-center items-center gap-12 md:gap-20">
                    <div className="group relative flex items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 w-64 h-64 md:w-72 md:h-72">
                        <img 
                            src={iacmag} 
                            alt="International Association for Computer Methods and Advances in Geomechanics (IACMAG)" 
                            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105" 
                        />
                    </div>
                    
                    <div className="group relative flex items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 w-64 h-64 md:w-72 md:h-72">
                        <img 
                            src={igs} 
                            alt="Indian Geotechnical Society (IGS)" 
                            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
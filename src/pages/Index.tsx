import { mainFamily } from '@/data/familyData';
import FamilyTree from '@/components/FamilyTree';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-8 md:py-12 text-center fade-in">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
          Silsilah Keluarga
        </h1>
        <div className="w-24 h-1 bg-gold-accent mx-auto rounded-full mb-4" />
        <p className="text-muted-foreground text-lg">
          Keluarga Besar <span className="gold-text font-semibold">{mainFamily.father.name} & {mainFamily.mother.name}</span>
        </p>
      </header>

      {/* Main Family Tree */}
      <main className="container mx-auto px-4 pb-16">
        <FamilyTree 
          family={mainFamily} 
          isClickable={true}
          basePath="/keluarga"
        />
        
        {/* Footer instruction */}
        <div className="text-center mt-12 fade-in-delayed stagger-12">
          <p className="text-muted-foreground text-sm">
            Klik pada nama anak untuk melihat keluarga mereka
          </p>
        </div>
      </main>

      {/* Decorative footer */}
      <footer className="py-6 text-center border-t border-border">
        <p className="text-muted-foreground text-sm">
          © 2024 Silsilah Keluarga
        </p>
      </footer>
    </div>
  );
};

export default Index;

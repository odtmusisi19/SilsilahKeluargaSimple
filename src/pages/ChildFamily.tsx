import { useParams, Link } from 'react-router-dom';
import { getChildFamily, getChildName, mainFamily } from '@/data/familyData';
import FamilyTree from '@/components/FamilyTree';
import { ArrowLeft } from 'lucide-react';

const ChildFamily = () => {
  const { childId } = useParams<{ childId: string }>();
  const family = childId ? getChildFamily(childId) : null;
  const childName = childId ? getChildName(childId) : '';

  if (!family) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center fade-in">
          <h1 className="text-2xl font-serif font-bold text-foreground mb-4">
            Keluarga tidak ditemukan
          </h1>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gold-accent hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke halaman utama
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <header className="py-8 md:py-12 text-center fade-in">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Kembali ke Keluarga Utama</span>
        </Link>
        
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
          Keluarga {childName}
        </h1>
        <div className="w-24 h-1 bg-gold-accent mx-auto rounded-full mb-4" />
        <p className="text-muted-foreground text-lg">
          Bagian dari Keluarga Besar{' '}
          <span className="gold-text font-semibold">
            {mainFamily.father.name} & {mainFamily.mother.name}
          </span>
        </p>
      </header>

      {/* Family Tree */}
      <main className="container mx-auto px-4 pb-16">
        <FamilyTree family={family} isClickable={false} />
        
        {/* Children count info */}
        <div className="text-center mt-12 fade-in-delayed stagger-6">
          <div className="inline-block bg-card border border-border rounded-lg px-6 py-4">
            <p className="text-foreground">
              <span className="font-serif font-bold text-2xl gold-text">
                {family.children.length}
              </span>
              <span className="text-muted-foreground ml-2">
                {family.children.length === 1 ? 'Anak' : 'Anak'}
              </span>
            </p>
          </div>
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

export default ChildFamily;

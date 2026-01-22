import { useParams, Link, useLocation } from 'react-router-dom';
import { getFamily, getMemberName, mainFamily } from '@/data/familyData';
import FamilyTree from '@/components/FamilyTree';
import { ArrowLeft, Home } from 'lucide-react';

const ChildFamily = () => {
  const { '*': pathParams } = useParams();
  const location = useLocation();
  
  // Parse the path to get the member ID (last segment)
  const pathSegments = pathParams?.split('/').filter(Boolean) || [];
  const currentMemberId = pathSegments[pathSegments.length - 1] || '';
  
  const family = currentMemberId ? getFamily(currentMemberId) : null;
  const memberName = currentMemberId ? getMemberName(currentMemberId) : '';

  // Build parent path for back button
  const parentPath = pathSegments.length > 1 
    ? '/keluarga/' + pathSegments.slice(0, -1).join('/')
    : '/';
  
  const parentName = pathSegments.length > 1 
    ? getMemberName(pathSegments[pathSegments.length - 2])
    : `${mainFamily.father.name} & ${mainFamily.mother.name}`;

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
        <div className="flex justify-center gap-4 mb-6">
          <Link 
            to={parentPath}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Kembali ke Keluarga {parentName}</span>
          </Link>
          
          {pathSegments.length > 1 && (
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Home className="w-5 h-5" />
              <span>Ke Halaman Utama</span>
            </Link>
          )}
        </div>
        
        {/* Breadcrumb */}
        <div className="flex justify-center items-center gap-2 text-sm text-muted-foreground mb-4 flex-wrap px-4">
          <Link to="/" className="hover:text-foreground transition-colors">
            {mainFamily.father.name} & {mainFamily.mother.name}
          </Link>
          {pathSegments.map((segment, index) => (
            <span key={segment} className="flex items-center gap-2">
              <span>/</span>
              {index === pathSegments.length - 1 ? (
                <span className="gold-text font-semibold">{getMemberName(segment)}</span>
              ) : (
                <Link 
                  to={'/keluarga/' + pathSegments.slice(0, index + 1).join('/')}
                  className="hover:text-foreground transition-colors"
                >
                  {getMemberName(segment)}
                </Link>
              )}
            </span>
          ))}
        </div>
        
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
          Keluarga {memberName}
        </h1>
        <div className="w-24 h-1 bg-gold-accent mx-auto rounded-full mb-4" />
      </header>

      {/* Family Tree */}
      <main className="container mx-auto px-4 pb-16">
        <FamilyTree 
          family={family} 
          isClickable={true}
          checkHasFamily={true}
          basePath={location.pathname}
        />
        
        {/* Children count info */}
        <div className="text-center mt-12 fade-in-delayed stagger-6">
          <div className="inline-block bg-card border border-border rounded-lg px-6 py-4">
            <p className="text-foreground">
              <span className="font-serif font-bold text-2xl gold-text">
                {family.children.length}
              </span>
              <span className="text-muted-foreground ml-2">
                Anak
              </span>
            </p>
          </div>
          
          <p className="text-muted-foreground text-sm mt-4">
            Klik pada nama anak yang memiliki keluarga untuk melihat silsilah mereka
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

export default ChildFamily;

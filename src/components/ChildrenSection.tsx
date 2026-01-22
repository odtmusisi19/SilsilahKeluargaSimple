import { FamilyMember } from '@/data/familyData';
import FamilyMemberCard from './FamilyMemberCard';

interface ChildrenSectionProps {
  children: FamilyMember[];
  isClickable?: boolean;
  basePath?: string;
}

const ChildrenSection = ({ children, isClickable = false, basePath = '/keluarga' }: ChildrenSectionProps) => {
  // Split children into two rows for better display
  const firstRow = children.slice(0, 6);
  const secondRow = children.slice(6);

  return (
    <div className="flex flex-col items-center w-full">
      {/* Horizontal line connecting all children */}
      <div className="relative w-full max-w-6xl">
        <div className="h-1 tree-line mx-8 fade-in-delayed stagger-4" />
        
        {/* First row of children */}
        <div className="flex justify-center gap-2 md:gap-4 mt-0 flex-wrap">
          {firstRow.map((child, index) => (
            <div key={child.id} className="flex flex-col items-center">
              {/* Vertical line from horizontal connector */}
              <div className={`w-1 h-8 tree-line fade-in-delayed stagger-${index + 4}`} />
              <div className={`fade-in-delayed stagger-${index + 5}`}>
                <FamilyMemberCard 
                  member={child} 
                  isClickable={isClickable}
                  linkTo={isClickable ? `${basePath}/${child.id}` : undefined}
                  size="medium"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Second row if exists */}
        {secondRow.length > 0 && (
          <>
            {/* Connector between rows */}
            <div className="flex justify-center mt-4">
              <div className="w-1 h-8 tree-line fade-in-delayed stagger-10" />
            </div>
            <div className="h-1 tree-line mx-8 fade-in-delayed stagger-10" />
            
            <div className="flex justify-center gap-2 md:gap-4 mt-0 flex-wrap">
              {secondRow.map((child, index) => (
                <div key={child.id} className="flex flex-col items-center">
                  {/* Vertical line from horizontal connector */}
                  <div className={`w-1 h-8 tree-line fade-in-delayed stagger-${index + 10}`} />
                  <div className={`fade-in-delayed stagger-${index + 11}`}>
                    <FamilyMemberCard 
                      member={child} 
                      isClickable={isClickable}
                      linkTo={isClickable ? `${basePath}/${child.id}` : undefined}
                      size="medium"
                    />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChildrenSection;

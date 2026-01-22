import { FamilyMember } from '@/data/familyData';
import FamilyMemberCard from './FamilyMemberCard';

interface ParentsSectionProps {
  father: FamilyMember;
  mother: FamilyMember;
}

const ParentsSection = ({ father, mother }: ParentsSectionProps) => {
  return (
    <div className="flex flex-col items-center">
      {/* Parents Container */}
      <div className="flex items-center gap-4 md:gap-8">
        <div className="fade-in-delayed stagger-1">
          <FamilyMemberCard member={father} size="large" />
        </div>
        
        {/* Connection line between parents */}
        <div className="w-8 md:w-16 h-1 tree-line rounded-full fade-in-delayed stagger-2" />
        
        <div className="fade-in-delayed stagger-1">
          <FamilyMemberCard member={mother} size="large" />
        </div>
      </div>
      
      {/* Vertical line down from parents */}
      <div className="w-1 h-12 tree-line fade-in-delayed stagger-3" />
    </div>
  );
};

export default ParentsSection;

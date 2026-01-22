import { Family } from '@/data/familyData';
import ParentsSection from './ParentsSection';
import ChildrenSection from './ChildrenSection';

interface FamilyTreeProps {
  family: Family;
  isClickable?: boolean;
  basePath?: string;
  checkHasFamily?: boolean;
}

const FamilyTree = ({ family, isClickable = false, basePath, checkHasFamily = false }: FamilyTreeProps) => {
  return (
    <div className="flex flex-col items-center py-8 px-4 overflow-x-auto">
      <ParentsSection father={family.father} mother={family.mother} />
      <ChildrenSection 
        children={family.children} 
        isClickable={isClickable}
        basePath={basePath}
        checkHasFamily={checkHasFamily}
      />
    </div>
  );
};

export default FamilyTree;

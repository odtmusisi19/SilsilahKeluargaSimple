import { Link } from 'react-router-dom';
import { FamilyMember } from '@/data/familyData';

interface FamilyMemberCardProps {
  member: FamilyMember;
  isClickable?: boolean;
  linkTo?: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const FamilyMemberCard = ({ member, isClickable = false, linkTo, size = 'medium', className = '' }: FamilyMemberCardProps) => {
  const sizeClasses = {
    small: 'w-16 h-16 sm:w-20 sm:h-20',
    medium: 'w-20 h-20 sm:w-24 sm:h-24',
    large: 'w-24 h-24 sm:w-32 sm:h-32',
  };

  const textSizeClasses = {
    small: 'text-xs',
    medium: 'text-sm',
    large: 'text-base',
  };

  const cardContent = (
    <div
      className={`
    family-card
    p-3
    flex flex-col items-center text-center
    w-[120px]
    sm:w-[140px]
    ${isClickable ? 'cursor-pointer' : ''}
    ${className}
  `}
    >
      <div className={`${sizeClasses[size]} rounded-full overflow-hidden border-4 border-gold-accent mb-3 bg-secondary`}>
        <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
      </div>
      <h3 className={`font-serif font-semibold text-foreground ${textSizeClasses[size]}`}>{member.name}</h3>
      {member.birthYear && <p className="text-muted-foreground text-xs mt-1">{member.birthYear}</p>}
      {isClickable && <span className="text-xs text-gold-accent mt-2 font-medium">Lihat Keluarga →</span>}
    </div>
  );

  if (isClickable && linkTo) {
    return (
      <Link to={linkTo} className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};

export default FamilyMemberCard;

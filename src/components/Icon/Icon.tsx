import { Pressable } from 'react-native';
import { ArrowLeftIcon } from '../../assets/icons/IconsComponents/ArrowLeftIcon';
import { ArrowRightIcon } from '../../assets/icons/IconsComponents/ArrowRightIcon';
import { BellIcon } from '../../assets/icons/IconsComponents/BellIcon';
import { BellOnIcon } from '../../assets/icons/IconsComponents/BellOnIcon';
import { BookmarkFillIcon } from '../../assets/icons/IconsComponents/BookmarkFillIcon';
import { BookmarkIcon } from '../../assets/icons/IconsComponents/BookmarkIcon';
import { CameraIcon } from '../../assets/icons/IconsComponents/CameraIcon';
import { ChatIcon } from '../../assets/icons/IconsComponents/ChatIcon';
import { ChatOnIcon } from '../../assets/icons/IconsComponents/ChatOnIcon';
import { CheckIcon } from '../../assets/icons/IconsComponents/CheckIcon';
import { ChevronRightIcon } from '../../assets/icons/IconsComponents/ChevronRightIcon';
import { CommentIcon } from '../../assets/icons/IconsComponents/CommentIcon';
import { EyeOffIcon } from '../../assets/icons/IconsComponents/EyeOffIcon';
import { EyeOnIcon } from '../../assets/icons/IconsComponents/EyeOnIcon';
import { FlashOffIcon } from '../../assets/icons/IconsComponents/FlashOffIcon';
import { FlashOnIcon } from '../../assets/icons/IconsComponents/FlashOnIcon';
import { HeartFillIcon } from '../../assets/icons/IconsComponents/HeartFillIcon';
import { HeartIcon } from '../../assets/icons/IconsComponents/HeartIcon';
import { HomeFillIcon } from '../../assets/icons/IconsComponents/HomeFillIcon';
import { HomeIcon } from '../../assets/icons/IconsComponents/HomeIcon';
import { MessageIcon } from '../../assets/icons/IconsComponents/MessageIcon';
import { NewPostIcon } from '../../assets/icons/IconsComponents/NewPostIcon';
import { ProfileFillIcon } from '../../assets/icons/IconsComponents/ProfileFillIcon';
import { ProfileIcon } from '../../assets/icons/IconsComponents/ProfileIcon';
import { SearchIcon } from '../../assets/icons/IconsComponents/SearchIcon';
import { SettingsIcon } from '../../assets/icons/IconsComponents/SettingsIcon';
import { TrashIcon } from '../../assets/icons/IconsComponents/TrashIcon';
import { useAppTheme } from '../../hooks/useAppTheme';
import { ThemeColors } from '../../theme/theme';

export interface IconBase {
  size?: number;
  color?: string;
}

interface Props {
  name: IconName;
  color?: ThemeColors;
  size?: number;
  onPress?: () => void;
}

export function Icon({name, color = 'backgroundContrast', size, onPress}: Props) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  if (onPress) {
    return (
      <Pressable hitSlop={10} onPress={onPress}>
        <SVGIcon color={colors[color]} size={size} />
      </Pressable>
    );
  }

  return <SVGIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  bell: BellIcon,
  bellOn: BellOnIcon,
  bookmark: BookmarkIcon,
  bookmarkFill: BookmarkFillIcon,
  camera: CameraIcon,
  chat: ChatIcon,
  chatOn: ChatOnIcon,
  check: CheckIcon,
  comment: CommentIcon,
  chevronRight: ChevronRightIcon,
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
  flashOn: FlashOnIcon,
  flashOff: FlashOffIcon,
  heart: HeartIcon,
  heartFill: HeartFillIcon,
  home: HomeIcon,
  homeFill: HomeFillIcon,
  message: MessageIcon,
  newPost: NewPostIcon,
  profile: ProfileIcon,
  profileFill: ProfileFillIcon,
  search: SearchIcon,
  settings: SettingsIcon,
  trash: TrashIcon,
};

type IconType = typeof iconRegistry;

type IconName = keyof IconType;

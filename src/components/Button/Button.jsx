import { Pressable, Text } from 'react-native';
import { buttonStyles } from './styles';

export default function Button({
  title,
  icon,
  onPress,
  variant = 'primary',
  disabled = false,
}) {
  const isIconOnly = icon && !title;

  const buttonStyle = [
    buttonStyles.base,
    isIconOnly && buttonStyles.iconOnly,
    variant === 'primary' && buttonStyles.primary,
    variant === 'secondary' && buttonStyles.secondary,
    disabled && buttonStyles.disabled,
  ];

  const textStyle = [
    buttonStyles.text,
    variant === 'primary' && buttonStyles.textPrimary,
    variant === 'secondary' && buttonStyles.textSecondary,
  ];

  return (
    <Pressable onPress={onPress} style={buttonStyle} disabled={disabled}>
      {icon}
      {title && <Text style={textStyle}>{title}</Text>}
    </Pressable>
  );
}

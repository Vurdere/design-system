import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../styles'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  width: '$20',
  height: '$20',
  overflow: 'hidden',
})

export const AvatarContainerCity = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  width: '$20',
  height: '$20',
  border: '2px solid $white',
  position: 'relative',

  '&::before': {
      content: '',
      background: '$primaryHover',
      width: 90,
      height: 90,
      position: 'absolute',
      top: -5,
      left: -5,
      zIndex: 0,
      borderRadius: '$full',
  },

  '&::after': {
    content: '',
    width: 0,
    height: 0, 
    borderLeft: '25px solid transparent',
    borderRight: '25px solid transparent',
    borderTop: '25px solid $primaryHover',
    zIndex: 0,
    position: 'absolute',
    bottom: -23,
    left: 15,
  }
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
  position: 'relative',
  zIndex: 1,
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$primaryHover',
  color: '$primary',


  svg: {
    width: '$10',
    height: '$10',
  },
})

export const AvatarCity = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$primaryHover',
  color: '$primary',

  svg: {
    width: '$10',
    height: '$10',
  },
})

import { User } from 'phosphor-react'
import { ComponentProps } from 'react'
import { AvatarContainer, AvatarImage, AvatarFallback, AvatarContainerCity, AvatarCity } from './styles'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar(props: AvatarProps) {
    return (
      <AvatarContainer>
        <AvatarImage {...props} />

        <AvatarFallback delayMs={600}>
          <User />
        </AvatarFallback>

        <AvatarCity delayMs={600}>
          <User />
        </AvatarCity>
      </AvatarContainer>
    )

}

Avatar.displayName = 'Avatar'

import LocationOnIcon from '@mui/icons-material/LocationOn'
import { ActionsContainer, NavBarContainer } from './styles'

import coffeeDeliveryLogo from '../../../assets/logo_coffee_delivery.svg'
import Button from '@mui/material/Button'
import { Badge } from '@mui/material'
import { CartButton } from '../../../components/CartButton'

export function NavBar() {
  return (
    <NavBarContainer>
      <img src={coffeeDeliveryLogo} alt="Coffee Delivery Logo" />
      <ActionsContainer>
        <Button
          sx={{
            borderRadius: '6px',
          }}
          startIcon={<LocationOnIcon />}
        >
          Secondary
        </Button>
        <Badge badgeContent={4} color="primary">
          <CartButton type="navbar" />
        </Badge>
      </ActionsContainer>
    </NavBarContainer>
  )
}

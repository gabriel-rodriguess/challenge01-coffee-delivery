import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore'

import { IconButton } from '@mui/material'

interface CartButtonProps {
  type: 'card' | 'navbar'
}

export function CartButton({ type }: CartButtonProps) {
  return (
    <IconButton
      sx={{
        borderRadius: '6px',
      }}
    >
      <LocalGroceryStoreIcon />
    </IconButton>
  )
}

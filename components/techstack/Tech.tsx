import React from 'react'
import { Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

interface TechPropsInterface {
    Icon: any
    name: string
}

const TechContainer = styled(Grid)(({ theme }) => ({
    width: "12.5rem"
}))

export default function Tech({ Icon, name }: TechPropsInterface) {
    return (
        <TechContainer container item justifyContent="center" alignItems="center" md={2} sm={3} xs={4}>
            <Icon style={{ maxHeight: "10rem", width: "auto", padding: "1.5rem" }} />
        </TechContainer>
    )
}

// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'


const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
        </Grid>
        <Grid item xs={12} md={8}>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Grid container spacing={6}>
            <Grid item xs={6}>

            </Grid>
            <Grid item xs={6}>

            </Grid>
            <Grid item xs={6}>

            </Grid>
            <Grid item xs={6}>

            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
        </Grid>
        <Grid item xs={12}>
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard

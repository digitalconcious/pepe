import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  Switch,
  FormControlLabel,
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: theme.shape.borderRadius * 2,
}));

const FeatureList = styled(List)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const PricingHeader = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(6),
  '& .MuiTypography-h2': {
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
  },
  '& .MuiTypography-subtitle1': {
    color: theme.palette.text.secondary,
  },
}));

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 120,
    yearlyPrice: 1200,
    features: [
      { text: 'Up to 5 Departments', included: true },
      { text: '15 Custom Forms', included: true },
      { text: 'Basic Branding', included: true },
      { text: 'Basic Template Library', included: true },
      { text: 'Hosted Forms (Pepe subdomain)', included: true },
      { text: '1 Admin + 5 Users', included: true },
      { text: 'Basic Roles & Permissions', included: true },
      { text: 'Form Approval Workflow', included: true },
      { text: 'Download Formats (PDF/CSV)', included: true },
      { text: 'Basic E-KYC', included: true },
      { text: 'Website/Social Media Embedding', included: false },
      { text: 'Custom Domain Hosting', included: false },
      { text: 'Desktop App', included: false },
      { text: 'CRM/CBS Integration', included: false },
      { text: 'Advanced E-KYC', included: false },
      { text: 'Third-Party Data Validation', included: false },
      { text: 'API Key Access', included: false },
      { text: 'Audit Logs & Access Control', included: false },
      { text: 'Real-time CBS Data Sync', included: false },
      { text: 'Advanced Analytics', included: false },
    ],
  },
  {
    name: 'Standard',
    monthlyPrice: 350,
    yearlyPrice: 3500,
    features: [
      { text: 'Up to 15 Departments', included: true },
      { text: '50 Custom Forms', included: true },
      { text: 'Full Branded', included: true },
      { text: 'Advanced Template Library', included: true },
      { text: 'Hosted Forms (Pepe subdomain)', included: true },
      { text: '1 Admin + 25 Users', included: true },
      { text: 'Advanced Roles & Permissions', included: true },
      { text: 'Form Approval Workflow', included: true },
      { text: 'Download Formats (PDF/CSV)', included: true },
      { text: 'Basic E-KYC', included: true },
      { text: 'Website/Social Media Embedding', included: true },
      { text: 'Custom Domain Hosting', included: false },
      { text: 'Desktop App', included: false },
      { text: 'CRM/CBS Integration', included: true },
      { text: 'Limited Advanced E-KYC', included: true },
      { text: 'Third-Party Data Validation', included: true },
      { text: 'API Key Access', included: true },
      { text: 'Audit Logs & Access Control', included: false },
      { text: 'Real-time CBS Data Sync', included: false },
      { text: 'Standard Analytics', included: true },
    ],
  },
  {
    name: 'Premium',
    monthlyPrice: 800,
    yearlyPrice: 8000,
    features: [
      { text: 'Unlimited Departments', included: true },
      { text: 'Unlimited Custom Forms', included: true },
      { text: 'Full Custom Branding', included: true },
      { text: 'Full Customization', included: true },
      { text: 'Hosted Forms (Pepe subdomain)', included: true },
      { text: 'Unlimited Users', included: true },
      { text: 'Advanced Roles & Permissions', included: true },
      { text: 'Form Approval Workflow', included: true },
      { text: 'Download Formats (PDF/CSV)', included: true },
      { text: 'Basic E-KYC', included: true },
      { text: 'Website/Social Media Embedding', included: true },
      { text: 'Custom Domain Hosting', included: true },
      { text: 'Desktop App', included: true },
      { text: 'CRM/CBS Integration', included: true },
      { text: 'Full Suite E-KYC', included: true },
      { text: 'Third-Party Data Validation', included: true },
      { text: 'API Key Access', included: true },
      { text: 'Audit Logs & Access Control', included: true },
      { text: 'Real-time CBS Data Sync', included: true },
      { text: 'Advanced Analytics', included: true },
    ],
  },
  {
    name: 'Enterprise',
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      { text: 'Unlimited Departments', included: true },
      { text: 'Unlimited Custom Forms', included: true },
      { text: 'White-labeled Option', included: true },
      { text: 'Full Customization', included: true },
      { text: 'Hosted Forms (Pepe subdomain)', included: true },
      { text: 'Unlimited Users', included: true },
      { text: 'Advanced Roles & Permissions', included: true },
      { text: 'Form Approval Workflow', included: true },
      { text: 'Download Formats (PDF/CSV)', included: true },
      { text: 'Basic E-KYC', included: true },
      { text: 'Website/Social Media Embedding', included: true },
      { text: 'Custom Domain Hosting', included: true },
      { text: 'Desktop App', included: true },
      { text: 'CRM/CBS Integration', included: true },
      { text: 'Full Suite + Custom E-KYC', included: true },
      { text: 'Third-Party Data Validation', included: true },
      { text: 'API Key Access', included: true },
      { text: 'Audit Logs & Access Control', included: true },
      { text: 'Real-time CBS Data Sync', included: true },
      { text: 'Custom Analytics', included: true },
    ],
  },
];

const PricingPlans: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <PricingHeader>
        <Typography variant="h2" component="h1">
          Go Paperless with Pepe
        </Typography>
        <Typography variant="subtitle1">
          Compare our subscription plans and choose the one that best suits your institution's digital transformation journey
        </Typography>
        <Box sx={{ mt: 2 }}>
          <FormControlLabel
            control={
              <Switch
                checked={isYearly}
                onChange={(e) => setIsYearly(e.target.checked)}
                color="primary"
              />
            }
            label={isYearly ? 'Annual Billing (Save 20%)' : 'Monthly Billing'}
          />
        </Box>
      </PricingHeader>

      <Grid container spacing={4}>
        {plans.map((plan) => (
          <Grid item xs={12} md={6} lg={3} key={plan.name}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <StyledCard>
                <CardContent>
                  <Typography variant="h4" component="h2" gutterBottom>
                    {plan.name}
                  </Typography>
                  <Typography variant="h3" component="div" gutterBottom>
                    {plan.monthlyPrice === null ? (
                      'Custom Pricing'
                    ) : (
                      <>
                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                        <Typography
                          component="span"
                          variant="subtitle1"
                          color="text.secondary"
                        >
                          /{isYearly ? 'year' : 'month'}
                        </Typography>
                      </>
                    )}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <FeatureList>
                    {plan.features.map((feature, index) => (
                      <ListItem key={index} sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          {feature.included ? (
                            <CheckCircleIcon color="primary" />
                          ) : (
                            <CancelIcon color="error" />
                          )}
                        </ListItemIcon>
                        <ListItemText
                          primary={feature.text}
                          primaryTypographyProps={{
                            variant: 'body2',
                            color: feature.included ? 'text.primary' : 'text.disabled',
                          }}
                        />
                      </ListItem>
                    ))}
                  </FeatureList>
                  <Box sx={{ mt: 'auto', pt: 2 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      size="large"
                      href="/contact"
                    >
                      {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                    </Button>
                  </Box>
                </CardContent>
              </StyledCard>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Digital Kiosk Section */}
      <Box sx={{ mt: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom align="center">
          Self-Service Digital Kiosks
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
          Transform your waiting areas into engaging, brand-aligned digital experiences
        </Typography>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Compact Pod Design
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  For smaller spaces; sleek, minimal footprint
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Interactive Lounge Style
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Comfortable seating with shared tablet access
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Modern Teller Booth
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Semi-private booths for personalized self-service
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/contact"
          >
            Request Kiosk Quote
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default PricingPlans; 
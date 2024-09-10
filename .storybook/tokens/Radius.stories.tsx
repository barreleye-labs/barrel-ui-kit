import { Meta, Story } from '@storybook/react';
import { Box, Typography } from '@mui/material';
import radiusTokens from '../../packages/tokens/radius/base.json';

const tableCellStyle = {
  textAlign: 'center',
  borderBottom: '1px solid #e0e0e0',
  width: '33%',
};

const tokenBoxStyle = {
  backgroundColor: '#f0f0f0',
  padding: '0.25rem',
  borderRadius: '4px',
  display: 'inline-block',
};

export default {
  title: 'Styles/Design Tokens',
  component: Box,
} as Meta;

const RadiusTable = () => (
  <Box mb={4}>
    <Typography variant="h6" mb={2} textAlign="left">Border Radius Tokens</Typography>
    <Box component="table" width="100%" border="1px solid #e0e0e0" borderRadius="8px" display="table">
      <Box component="thead" display="table-header-group">
        <Box component="tr" display="table-row">
          <Box component="th" p={2} sx={tableCellStyle}>
            TOKEN
          </Box>
          <Box component="th" p={2} sx={tableCellStyle}>
            VALUE
          </Box>
          <Box component="th" p={2} sx={tableCellStyle}>
            EXAMPLE
          </Box>
        </Box>
      </Box>
      <Box component="tbody" display="table-row-group">
        {Object.entries(radiusTokens.radius).map(([tokenName, radiusValue]) => (
          <Box component="tr" key={tokenName} display="table-row">
            <Box component="td" p={2} sx={tableCellStyle}>
              <Box component="span" sx={tokenBoxStyle}>
                <Typography fontFamily="monospace" fontWeight="bold">
                  {`--barrel-radius-${tokenName}`}
                </Typography>
              </Box>
            </Box>
            <Box component="td" p={2} sx={tableCellStyle}>
              <Typography fontFamily="monospace">{radiusValue}</Typography>
            </Box>
            <Box component="td" p={2} sx={tableCellStyle}>
              <Box
                width="40px"
                height="40px"
                bgcolor="#e5fbf8"
                borderRadius={radiusValue}
                border="1px solid #e0e0e0"
                style={{ margin: '0 auto' }}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  </Box>
);

const Template: Story = () => (
  <Box>
    <RadiusTable />
  </Box>
);

export const Radius = Template.bind({});
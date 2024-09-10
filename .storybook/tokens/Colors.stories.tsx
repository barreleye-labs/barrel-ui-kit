import { Meta, Story } from '@storybook/react';
import { Box, Typography } from '@mui/material';
import colorTokens from '../../packages/tokens/color/base.json';

export default {
  title: 'Styles/Design Tokens',
  component: Box,
} as Meta;

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

const ColorTable = ({ category, tokens }: { category: string; tokens: Record<string, string> }) => (
  <Box mb={4}>
    <Typography variant="h6" mb={2} textAlign="left">{category}</Typography>
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
        {Object.entries(tokens).map(([token, value]) => (
          <Box component="tr" key={token} display="table-row">
            <Box component="td" p={2} sx={tableCellStyle}>
              <Box component="span" sx={tokenBoxStyle}>
                <Typography fontFamily="monospace" fontWeight="bold">
                  {`--barrel-palette-${category}-${token}`}
                </Typography>
              </Box>
            </Box>
            <Box component="td" p={2} sx={tableCellStyle}>
              <Typography fontFamily="monospace">{value}</Typography>
            </Box>
            <Box component="td" p={2} sx={tableCellStyle}>
              <Box
                width="40px"
                height="40px"
                bgcolor={value}
                borderRadius="4px"
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
    <Typography variant="h4" mb={4} textAlign="left">Color Tokens</Typography>
    {Object.entries(colorTokens.colorSchemes.light.palette).map(([category, tokens]) => (
      <ColorTable key={category} category={category} tokens={tokens} />
    ))}
  </Box>
);

export const Colors = Template.bind({});
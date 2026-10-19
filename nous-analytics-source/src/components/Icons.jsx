const props = {
  width: 28,
  height: 28,
  viewBox: '0 0 28 28',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export const SiteIcon = () => (
  <svg {...props}>
    <rect x="3" y="5" width="22" height="18" rx="3" />
    <path d="M3 10h22M8 15h8M8 19h5" />
  </svg>
)

export const FlowIcon = () => (
  <svg {...props}>
    <circle cx="7" cy="8" r="3" />
    <circle cx="21" cy="8" r="3" />
    <circle cx="14" cy="21" r="3" />
    <path d="M10 8h8M8.5 10.5l4 8M19.5 10.5l-4 8" />
  </svg>
)

export const MegaphoneIcon = () => (
  <svg {...props}>
    <path d="M4 11v6h4l9 5V6L8 11H4z" />
    <path d="M21 10c1.3 1 1.3 7 0 8" />
  </svg>
)

export const ChartIcon = () => (
  <svg {...props}>
    <path d="M4 24V4M4 24h20" />
    <path d="M9 20v-6M14 20V9M19 20v-9" />
  </svg>
)

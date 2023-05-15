import { useTheme } from '@emotion/react'

function ContentMainBox ({ children }) {
  const theme = useTheme()
  return <div className="h-full rounded-md" style={{ backgroundColor: theme.palette.background.default, border: `2px solid ${theme.palette.divider}`, borderRadius:10 }}>{children}</div>
}

function Title ({ children }) {
  const theme = useTheme()
  return <div className="p-4 font-semibold" style={{ backgroundColor: '#F2F4F4', borderRadius:"10px 10px 0px 0px" }} >{children}</div>
}

function Content ({ children }) {
  const theme = useTheme()
  return (
      <section className="p-2" style={{ backgroundColor: theme.palette.background.default }}>
        {children}
      </section>
  )
}

ContentMainBox.Title = Title
ContentMainBox.Content = Content

export default ContentMainBox

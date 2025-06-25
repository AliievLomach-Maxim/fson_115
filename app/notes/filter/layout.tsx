type Props = {
  children: React.ReactNode
  sidebar: React.ReactNode
  footer: React.ReactNode
}

const NotesListLayout = async ({ children, sidebar, footer }: Props) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '12px' }}>
      <aside style={{ minWidth: '100px' }}>{sidebar}</aside>
      <section>{children}</section>
      <footer>{footer}</footer>
    </div>
  )
}

export default NotesListLayout

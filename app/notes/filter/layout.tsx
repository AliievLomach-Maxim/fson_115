type Props = {
  children: React.ReactNode
  sidebar: React.ReactNode
}

const NotesListLayout = async ({ children, sidebar }: Props) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '12px' }}>
      <aside style={{ minWidth: '100px' }}>{sidebar}</aside>
      <section>{children}</section>
    </div>
  )
}

export default NotesListLayout

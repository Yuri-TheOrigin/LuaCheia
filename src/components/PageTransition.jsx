import logo from '../assets/LUACHEIALOGO.png'

export default function PageTransition() {
  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <img
        src={logo}
        alt="Logo girando"
        className="h-48 animate-spin-slow"
      />
    </div>
  )
}
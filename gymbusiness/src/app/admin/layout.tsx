export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es">
            <body className="bg-gray-100 text-gray-900">
                <div className="flex h-screen">
                    {/* Barra lateral */}
                    <aside className="w-64 bg-[#a83466] text-white p-4">
                        <h1 className="text-xl font-bold mb-6">Admin</h1>
                        <nav className="space-y-2">
                            <a href="/admin" className="block hover:bg-[#922c59] p-2 rounded">Dashboard</a>
                            <a href="/admin/users" className="block hover:bg-[#922c59] p-2 rounded">Usuarios</a>
                            <a href="/admin/settings" className="block hover:bg-[#922c59] p-2 rounded">Configuración</a>
                        </nav>
                    </aside>

                    {/* Contenido principal */}
                    <main className="flex-1 p-6 overflow-y-auto">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}

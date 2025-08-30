export default function Pages({title,children}) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-amber-100">
            <div className="w-[90%] max-w-3xl p-10 bg-white shadow-2xl rounded-lg rounded-sm border border-amber-200">
                <h2 className="text-3xl font-bold mb-4 font-serif">{title}</h2>
                <div className="text-lg text-gray-800 leading-relaxed font-serif">{children}</div>
            </div>
        </div>
    )
}
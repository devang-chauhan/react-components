

export default function Badge({shape, color, children, ...rest}) { 

    return (
        <div className={`badge ${shape.toLowerCase() === 'pill' ? `pill` : ''} ${color}`}
            {...rest}>
            {children}
        </div>
    )
}

export default function Badge({shape, color, title, ...rest}) { 

    return (
        <div className={`badge ${shape && shape.toLowerCase() === 'pill' ? `pill` : ''} ${color}`}
            {...rest}>
            {title}
        </div>
    )
}

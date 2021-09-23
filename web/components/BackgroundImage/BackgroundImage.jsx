import Image from 'next/image';

export default function BackgroundImage(props) {
    return (
        <div
            className={
                'absolute inset-0 z-0  ' +
                (props.opacity ? 'opacity-' + props.opacity : '')
            }
        >
            <Image
                layout="fill"
                className="object-cover w-full h-screen"
                src={props.image}
                title={props.title}
            />
        </div>
    );
}

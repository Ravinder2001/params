/** @format */
import { Link } from "react-router-dom";
import "./styles.css";
export default function Home() {
	return (
		<div>
			<div className='box'>
				<Link to={`/posts`}>
					<button className='btn'>Post</button>
				</Link>
				<Link to={`/comments`}>
					<button className='btn'>Comment</button>
				</Link>
				<Link to={`/users`}>
					<button className='btn'>Users</button>
				</Link>
				<Link to={`/todos`}>
					<button className='btn'>Todos</button>
				</Link>
				<Link to={`/albums`}>
					<button className='btn'>Album</button>
				</Link>
				<Link to={`/photos`}>
					<button className='btn'>Photos</button>
				</Link>
			</div>
		</div>
	);
}

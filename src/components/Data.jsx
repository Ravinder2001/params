/** @format */
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles.css";
export default function Data() {
	const [posts, setPosts] = useState([]);
	const [albums, setAlbums] = useState([]);
	const [photos, setPhotos] = useState([]);
	const [comments, setcomments] = useState([]);
	const [todos, setTodos] = useState([]);
	const [users, setUsers] = useState([]);
	useEffect(() => {
		get();
	}, []);
	const params = useParams();

	async function get() {
		try {
			const res = await fetch(
				`https://jsonplaceholder.typicode.com/${params.type}`,
			);
			const data = await res.json();
			if (params.type == "posts") {
				setPosts(data);
			} else if (params.type == "photos") {
				setPhotos(data);
			} else if (params.type == "comments") {
				setcomments(data);
			} else if (params.type == "todos") {
				setTodos(data);
			} else if (params.type == "users") {
				setUsers(data);
			} else {
				setAlbums(data);
			}
		} catch (err) {
			console.log(err.message);
		}
	}

	function Post() {
		return (
			<div className='container'>
				<table className='table'>
					<tr className='tr'>
						<th className='th'>Id</th>
						<th className='th'>Title</th>
						<th className='th'>User Id</th>
					</tr>

					{posts.map((e) => (
						<tr key={e.id} className='tr'>
							<td className='td'>{e.id}</td>
							<td className='td'>{e.title}</td>
							<td className='td'>{e.userId}</td>
						</tr>
					))}
				</table>
			</div>
		);
	}
	function Comments() {
		return (
			<div className='container'>
				<table className='table'>
					<tr className='tr'>
						<th className='th'>Id</th>
						<th className='th'>Title</th>
						<th className='th'>From</th>
					</tr>

					{comments.map((e) => (
						<tr key={e.id} className='tr'>
							<td className='td'>{e.id}</td>
							<td className='td'>{e.name}</td>
							<td className='td'>{e.email}</td>
						</tr>
					))}
				</table>
			</div>
		);
	}
	function Users() {
		return (
			<div className='container'>
				<table className='table'>
					<tr className='tr'>
						<th className='th'>Id</th>
						<th className='th'>Name</th>
						<th className='th'>Email</th>
					</tr>

					{users.map((e) => (
						<tr key={e.id} className='tr'>
							<td className='td'>{e.id}</td>
							<td className='td'>{e.name}</td>
							<td className='td'>{e.email}</td>
						</tr>
					))}
				</table>
			</div>
		);
	}
	function Todos() {
		return (
			<div className='container'>
				<table className='table'>
					<tbody>
						<tr className='tr'>
							<th className='th'>Id</th>
							<th className='th'>Title</th>
							<th className='th'>Status</th>
						</tr>

						{todos.map((e) => (
							<tr key={e.id} className='tr'>
								<td className='td'>{e.id}</td>
								<td className='td'>{e.title}</td>
								<td className='td'>
									{e.completed ? (
										<div style={{ color: "Green" }}>True</div>
									) : (
										<div style={{ color: "Red" }}>False</div>
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
	function Albums() {
		return (
			<div className='container'>
				<table className='table'>
					<tbody>
						<tr className='tr'>
							<th className='th'>Id</th>
							<th className='th'>Title</th>
							<th className='th'>User Id</th>
						</tr>

						{albums.map((e) => (
							<tr key={e.id} className='tr'>
								<td className='td'>{e.id}</td>
								<td className='td'>{e.title}</td>
								<td className='td'>{e.userId}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
	function Photos() {
		return (
			<div className='container'>
				<table className='table'>
					<tbody>
						<tr className='tr'>
							<th className='th'>Id</th>
							<th className='th'>Title</th>
							<th className='th'>Photo</th>
						</tr>

						{photos.slice(0, 50).map((e) => (
							<tr key={e.id} className='tr'>
								<td className='td'>{e.id}</td>
								<td className='td'>{e.title}</td>
								<td className='td'>
									<img src={e.url} alt='' width='100px' />
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
	if (params.type == "posts") {
		return <Post></Post>;
	} else if (params.type == "comments") {
		return <Comments></Comments>;
	} else if (params.type == "todos") {
		return <Todos></Todos>;
	} else if (params.type == "users") {
		return <Users></Users>;
	} else if (params.type == "albums") {
		return <Albums></Albums>;
	} else if (params.type == "photos") {
		return <Photos></Photos>;
	}
}

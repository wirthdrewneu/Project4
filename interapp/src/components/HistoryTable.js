import React from 'react';
import "../css/designs.css"

export default function HistoryTable(props) {
    const { posts, onDelete, onEdit} = props;
    return(
        <div className="table-responsive-lg no-padding">
            <table class="table table bg-white" id = "maincontent">
                <thead>
                <tr>
                    <th scope="col">Date Applied</th>
                    <th scope="col">Company</th>
                    <th scope="col">Role</th>
                    <th scope="col">Type</th>
                    <th scope="col">Stage</th>
                    <th scope="col">Next Due</th>
                    <th scope="col">Description</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                { posts.map (post => 
                    <tr key={post._id}>
                    <td>{post.DateApplied}</td>
                    <td>{post.Company}</td>
                    <td>{post.Role}</td>
                    <td>{post.Type}</td>
                    <td>{post.Stage}</td>
                    <td>{post.StageDate}</td>
                    <td class="limitText">{post.JobDescription}</td>
                    <td><button onClick={() => onEdit(post)} type="button" class="btn btn-primary">Edit</button></td>
                    <td><button onClick={() => onDelete(post)} type="button" class="btn btn-danger">Delete</button></td>
                    </tr>  
                )}
                </tbody>
            </table>
        </div>
    );
}
import React, {useState, useEffect} from 'react';
// eslint-disable-next-line
import ReactDOM from 'react-dom';
// eslint-disable-next-line
import axios from 'axios';

const Search = () => {
   const[term, setTerm] = useState("programming");
   const[results, setResults] = useState([]);

   useEffect(() =>{
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                           params: {
                             action: 'query',
                             list: 'search',
                             origin: '*',
                             format: 'json',
                             srsearch: term,
                           },
            })
            setResults(data.query.search);
        };

        if(term && !results.length){
            search();
        }else{
            const timeOutId = setTimeout(
            () => {
                if(term){
                    search();
                }
            }, 1000);

            return () => clearTimeout(timeOutId);
        }


        }, [term]);

   const renderedItems = results.map((result) =>{
                   return(<div className="item" key={result.pageid}>
                       <div className="right floated content">
                           <a className="ui button"
                           href={`https://en.wikipedia.org?curid=${result.pageid}`
                           }>
                               Go
                           </a>
                       </div>
                       <div className="content">
                            <div className="header"> {result.title}</div>
                            <span dangerouslySetInnerHTML={{__html: result.snippet}} />
                       </div>
                   </div>
               );
               }
               );

    return  (<div className="ui form">
                 <div className="field">
                     <label> Enter search Term</label>
                     <input
                        value={term}
                        className="input"
                        onChange= {(e) => setTerm(e.target.value)}/>
                 </div>
                 <div className="ui celled list">{renderedItems}</div>
             </div>);
    }
export default Search;
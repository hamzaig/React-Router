import React from 'react'
import { Route, useParams } from 'react-router'
import Comments from "../components/comments/Comments";
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Aahil', text: 'Learning React is fun!' },
    { id: 'q2', author: 'Seemab', text: 'Learning React is great!' },
];

const QuoteDetail = () => {
    const params = useParams();
    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if (!quote) {
        return <p>No Quote Found</p>
    }

    return (
        <div>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path="/quotes/:quoteId/comments">
                <Comments />
            </Route>
        </div>
    )
}

export default QuoteDetail

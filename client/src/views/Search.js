import React, { Component } from 'react'
import { search } from '../utils/BooksAPI'
import Book from '../components/Book'
import { DebounceInput } from 'react-debounce-input';
import PropTypes from 'prop-types'
import {
    Row,
    Col,
    Form,
    FormGroup,
    Input,
    CardDeck
} from 'reactstrap';


class Search extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onChangeBookShelf: PropTypes.func.isRequired,
    }
    state = {
        books: []
    }

    clearBooks = () => {
        this.setState(() => ({
            books: []
        }))
    }


    updateQuery = (query) => {
        query = query.trim()

        search(query)
            .then((books) => {
                if (books.error)
                    return []

                const myBooks = this.props.books
                return books.map((book) => {
                    const foundBook = myBooks.find((myBook) => myBook.id === book.id)
                    book.shelf = foundBook ? foundBook.shelf : 'none'
                    return book;
                })
            })
            .then((books) => {
                this.setState(() => ({
                    books
                }))
            }).catch(() => {
                this.clearBooks();
            })
    }

    componentDidMount() {
        this.searchInput.focus();
    }

    render() {
        const { books } = this.state
        const { onChangeBookShelf } = this.props

        return (
            <React.Fragment>
                <h1 className="mt-5">Busca de Livros</h1>
                <Row>
                    <Col>
                        <Form>
                            <FormGroup>
                                <Input tag={DebounceInput}
                                    minLength={2}
                                    debounceTimeout={500}
                                    type="text"
                                    placeholder="Search by title or author"
                                    onChange={(event) => this.updateQuery(event.target.value)}
                                    ref={(input) => {
                                        this.searchInput = input;
                                    }}
                                />
                            </FormGroup>
                        </Form>


                        <div className="search-books-results">
                            <CardDeck>

                                {books.length > 0 && books.map((book) => (
                                    <Book key={book.id} book={book} onChangeBookShelf={onChangeBookShelf} />
                                ))}

                            </CardDeck>
                        </div>


                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default Search
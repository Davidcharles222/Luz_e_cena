import Logo from '../Logo'
import HeaderActions from './components/HeaderActions'
import HeaderFormFilter from './components/HeaderFormFilters'
import HeaderLinks from './components/HeaderLinks'
import HeaderList from './components/HeaderList'
import HeaderListItem from './components/HeaderListItem'

const Header = () => {
    return (
        <header>
            <HeaderList>
                <HeaderListItem>
                    <Logo src='/Logo.png' />
                </HeaderListItem>

                <HeaderListItem>
                    <HeaderLinks />
                </HeaderListItem>

                <HeaderListItem>
                    <HeaderFormFilter />
                </HeaderListItem>

                <HeaderListItem>
                    <HeaderActions />
                </HeaderListItem>
            </HeaderList>
        </header>
    )
}

export default Header
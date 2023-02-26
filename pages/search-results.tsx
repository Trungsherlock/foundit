import {NextPage} from 'next';
import { GetServerSideProps } from 'next';
import { Category, Type } from '@prisma/client';
import { Layout } from '../src/components/layout';
import { prisma } from '../lib/prismadb';
import { SearchResults } from '@/components/templates/search_results';
import { TSearch } from '@/components/templates/search_results/types';

const SearchPage: NextPage<TSearch> = ({}) => {

    return (
        <Layout>
            <SearchResults/>
        </Layout>
    );
};

export default SearchPage;
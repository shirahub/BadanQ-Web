export const login = (email, password) => ({
    type: "LOGIN",
    email: email,
    password: password,
})

export const setLogout = () => ({
    type: "LOGOUT",
    user: '',
    role: '',
})

export const newUser = (email, password, nama, jeniskelamin, pekerjaan, foto, telepon, alasan, tanggallahir) => ({
    type: "NEWUSER",
    email: email,
    password: password,
    nama: nama,
    jeniskelamin: jeniskelamin,
    pekerjaan: pekerjaan,
    foto: foto,
    telepon: telepon,
    alasan: alasan,
    tanggallahir: tanggallahir,
})

export const editEmployee = (name, email, github, phone, motto, photo) => ({
    type: "EDIT",
    name: name,
    email: email,
    github: github,
    phone: phone,
    motto: motto,
    photo: photo
})

export const deleteEmployee = (email) => ({
    type: "DELETE",
    email: email
})
